import { cargarPreguntas } from './preguntas.js';

export function mostrarCategoriasSection(container) {
  container.innerHTML = `
    <div id="categorias-container">
      <style>
        #categorias-container {
          font-family: 'Segoe UI', system-ui, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 1.5rem;
        }
        .categorias-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }
        .categorias-title {
          color: #3a0ca3;
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        .search-box {
          position: relative;
          max-width: 500px;
          margin: 0 auto 1.5rem;
        }
        #buscador-categorias {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        #buscador-categorias:focus {
          outline: none;
          border-color: #4361ee;
          box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.2);
        }
        #categorias-lista {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }
        .categoria-btn {
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          padding: 1rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: #2b2d42;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
        }
        .categoria-btn:hover {
          background: #4361ee;
          color: white;
          border-color: #4361ee;
          transform: translateY(-2px);
        }
        .no-results {
          text-align: center;
          color: #6c757d;
          grid-column: 1 / -1;
          padding: 2rem;
        }
        @media (max-width: 600px) {
          #categorias-lista {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          }
        }
      </style>

      <div class="categorias-header">
        <h1 class="categorias-title">Explora Categorías</h1>
        <p>Selecciona un tema para comenzar tu trivia</p>
      </div>
      
      <div class="search-box">
        <input type="text" 
               id="buscador-categorias" 
               placeholder="Buscar categoría..." 
               aria-label="Buscar categorías" />
      </div>
      
      <div id="categorias-lista">
        <div class="no-results">Cargando categorías...</div>
      </div>
      
      <div id="preguntas-lista"></div>
    </div>
  `;

  const buscador = document.getElementById('buscador-categorias');
  const listaCategorias = document.getElementById('categorias-lista');

  // Cargar categorías desde API
  fetch('https://opentdb.com/api_category.php')
    .then(res => res.json())
    .then(data => {
      const categorias = data.trivia_categories;
      mostrarCategorias(categorias);

      buscador.addEventListener('input', () => {
        const filtro = buscador.value.toLowerCase();
        const filtradas = categorias.filter(cat => 
          cat.name.toLowerCase().includes(filtro)
        );
        mostrarCategorias(filtradas);
      });
    })
    .catch(error => {
      listaCategorias.innerHTML = `
        <div class="no-results">
          Error al cargar categorías. Intenta nuevamente más tarde.
        </div>
      `;
      console.error('Error fetching categories:', error);
    });

  function mostrarCategorias(categorias) {
    if (categorias.length === 0) {
      listaCategorias.innerHTML = `
        <div class="no-results">
          No se encontraron categorías que coincidan con tu búsqueda.
        </div>
      `;
      return;
    }

    listaCategorias.innerHTML = '';
    categorias.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'categoria-btn';
      btn.textContent = cat.name;
      btn.setAttribute('aria-label', `Categoría ${cat.name}`);
      btn.addEventListener('click', () => {
        // Feedback visual al seleccionar
        btn.style.backgroundColor = '#3a0ca3';
        btn.style.color = 'white';
        cargarPreguntas(cat.id);
      });
      listaCategorias.appendChild(btn);
    });
  }
}