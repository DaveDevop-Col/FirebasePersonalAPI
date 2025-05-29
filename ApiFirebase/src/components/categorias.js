import { cargarPreguntas } from './preguntas.js';

export function mostrarCategoriasSection(container) {
  container.innerHTML = `
    <div id="categorias">
      <h2>Categorías</h2>
      <input type="text" id="buscador-categorias" placeholder="Buscar categoría..." />
      <div id="categorias-lista"></div>
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
        const filtradas = categorias.filter(cat => cat.name.toLowerCase().includes(filtro));
        mostrarCategorias(filtradas);
      });
    });

  function mostrarCategorias(categorias) {
    listaCategorias.innerHTML = '';
    categorias.forEach(cat => {
      const btn = document.createElement('button');
      btn.textContent = cat.name;
      btn.addEventListener('click', () => {
        cargarPreguntas(cat.id);
      });
      listaCategorias.appendChild(btn);
    });
  }
}
