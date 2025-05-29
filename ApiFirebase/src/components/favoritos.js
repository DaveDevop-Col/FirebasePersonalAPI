const LS_KEY = 'trivia_favoritos';

export function mostrarFavoritos(container) {
  container.innerHTML = `
    <div id="favoritos">
      <h2>Favoritos</h2>
      <form id="form-favoritos">
        <input type="text" id="pregunta-texto" placeholder="Texto de la pregunta" required />
        <input type="text" id="respuesta-correcta" placeholder="Respuesta correcta" required />
        <input type="text" id="categoria" placeholder="Categoría" required />
        <button type="submit">Agregar Favorito</button>
      </form>
      <input type="text" id="buscador-favoritos" placeholder="Buscar favoritos..." />
      <div id="favoritos-lista"></div>
    </div>
  `;

  const form = document.getElementById('form-favoritos');
  const buscador = document.getElementById('buscador-favoritos');
  const lista = document.getElementById('favoritos-lista');

  let favoritos = cargarFavoritos();

  function cargarFavoritos() {
    const data = localStorage.getItem(LS_KEY);
    return data ? JSON.parse(data) : [];
  }

  function guardarFavoritos() {
    localStorage.setItem(LS_KEY, JSON.stringify(favoritos));
  }

  function mostrarFavoritosLista(items) {
    lista.innerHTML = '';
    if (items.length === 0) {
      lista.innerHTML = '<p>No hay favoritos.</p>';
      return;
    }
    items.forEach((fav, idx) => {
      const div = document.createElement('div');
      div.className = 'favorito-item';
      div.innerHTML = `
        <h4>${fav.pregunta}</h4>
        <p><strong>Respuesta:</strong> ${fav.respuesta}</p>
        <p><strong>Categoría:</strong> ${fav.categoria}</p>
        <button data-idx="${idx}" class="editar">Editar</button>
        <button data-idx="${idx}" class="eliminar">Eliminar</button>
      `;
      lista.appendChild(div);
    });

    // Añadir eventos a botones
    lista.querySelectorAll('button.eliminar').forEach(btn => {
      btn.addEventListener('click', e => {
        const idx = e.target.dataset.idx;
        favoritos.splice(idx,1);
        guardarFavoritos();
        mostrarFavoritosLista(favoritos);
      });
    });

    lista.querySelectorAll('button.editar').forEach(btn => {
      btn.addEventListener('click', e => {
        const idx = e.target.dataset.idx;
        const fav = favoritos[idx];
        // Rellenar formulario para editar
        document.getElementById('pregunta-texto').value = fav.pregunta;
        document.getElementById('respuesta-correcta').value = fav.respuesta;
        document.getElementById('categoria').value = fav.categoria;
        // Cambiar botón a modo actualizar
        form.querySelector('button[type="submit"]').textContent = 'Actualizar Favorito';

        // Cambiar comportamiento submit
        form.onsubmit = (ev) => {
          ev.preventDefault();
          favoritos[idx] = {
            pregunta: document.getElementById('pregunta-texto').value,
            respuesta: document.getElementById('respuesta-correcta').value,
            categoria: document.getElementById('categoria').value
          };
          guardarFavoritos();
          mostrarFavoritosLista(favoritos);
          form.reset();
          form.querySelector('button[type="submit"]').textContent = 'Agregar Favorito';
          form.onsubmit = onFormSubmit;
        }
      });
    });
  }

  function onFormSubmit(e) {
    e.preventDefault();
    const nueva = {
      pregunta: document.getElementById('pregunta-texto').value,
      respuesta: document.getElementById('respuesta-correcta').value,
      categoria: document.getElementById('categoria').value
    };
    favoritos.push(nueva);
    guardarFavoritos();
    mostrarFavoritosLista(favoritos);
    form.reset();
  }

  form.onsubmit = onFormSubmit;

  buscador.addEventListener('input', () => {
    const filtro = buscador.value.toLowerCase();
    const filtrados = favoritos.filter(fav =>
      fav.pregunta.toLowerCase().includes(filtro) ||
      fav.respuesta.toLowerCase().includes(filtro) ||
      fav.categoria.toLowerCase().includes(filtro)
    );
    mostrarFavoritosLista(filtrados);
  });

  mostrarFavoritosLista(favoritos);
}
