export function cargarPreguntas(categoriaId) {
  const preguntasLista = document.getElementById('preguntas-lista');
  preguntasLista.innerHTML = '<p>Cargando preguntas...</p>';

  fetch(`https://opentdb.com/api.php?amount=5&category=${categoriaId}`)
    .then(res => res.json())
    .then(data => {
      const preguntas = data.results;
      mostrarPreguntas(preguntas);
    })
    .catch(() => {
      preguntasLista.innerHTML = '<p>Error cargando preguntas.</p>';
    });

  function mostrarPreguntas(preguntas) {
    preguntasLista.innerHTML = '';

    preguntas.forEach((pregunta, i) => {
      const divPregunta = document.createElement('div');
      divPregunta.classList.add('pregunta');

      const preguntaTexto = document.createElement('h4');
      preguntaTexto.innerHTML = decodeHTML(pregunta.question);
      divPregunta.appendChild(preguntaTexto);

      // Mezclar opciones
      const opciones = [...pregunta.incorrect_answers];
      opciones.push(pregunta.correct_answer);
      shuffleArray(opciones);

      opciones.forEach(opcion => {
        const btnOpcion = document.createElement('button');
        btnOpcion.classList.add('option');
        btnOpcion.innerHTML = decodeHTML(opcion);

        btnOpcion.addEventListener('click', () => {
          // Deshabilitar todos los botones
          const buttons = divPregunta.querySelectorAll('button.option');
          buttons.forEach(b => b.disabled = true);

          if (opcion === pregunta.correct_answer) {
            btnOpcion.classList.add('correcta');
          } else {
            btnOpcion.classList.add('incorrecta');
            // Opcional: marcar la correcta
            buttons.forEach(b => {
              if (b.textContent === decodeHTML(pregunta.correct_answer)) {
                b.classList.add('correcta');
              }
            });
          }
        });

        divPregunta.appendChild(btnOpcion);
      });

      preguntasLista.appendChild(divPregunta);
    });
  }

  // Utilidad para mezclar arreglo
  function shuffleArray(arr) {
    for(let i = arr.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i+1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Decode HTML entities
  function decodeHTML(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
}
