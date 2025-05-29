// preguntas.js
import { auth, db } from '../firebaseConfig.js';
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";

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

      const opciones = [...pregunta.incorrect_answers, pregunta.correct_answer];
      shuffleArray(opciones);

      opciones.forEach(opcion => {
        const btnOpcion = document.createElement('button');
        btnOpcion.classList.add('option');
        btnOpcion.innerHTML = decodeHTML(opcion);

        btnOpcion.addEventListener('click', async () => {
          // Deshabilitar todas las opciones
          const buttons = divPregunta.querySelectorAll('button.option');
          buttons.forEach(b => b.disabled = true);

          const esCorrecta = opcion === pregunta.correct_answer;

          if (esCorrecta) {
            btnOpcion.classList.add('correcta');
          } else {
            btnOpcion.classList.add('incorrecta');
            buttons.forEach(b => {
              if (b.textContent === decodeHTML(pregunta.correct_answer)) {
                b.classList.add('correcta');
              }
            });
          }

          // Guardar respuesta en Firestore
          const user = auth.currentUser;
          if (user) {
            const userRef = doc(db, "usuarios", user.uid);
            const respuesta = {
              pregunta: decodeHTML(pregunta.question),
              seleccion: decodeHTML(opcion),
              correcta: decodeHTML(pregunta.correct_answer),
              fueCorrecta: esCorrecta,
              categoria: categoriaId,
              timestamp: new Date()
            };

            try {
              const docSnap = await getDoc(userRef);

              if (!docSnap.exists()) {
                // Crear el documento si no existe
                await setDoc(userRef, {
                  respuestas: [respuesta]
                });
              } else {
                // Actualizar el documento si ya existe
                await updateDoc(userRef, {
                  respuestas: arrayUnion(respuesta)
                });
              }

              console.log("Respuesta guardada correctamente.");
            } catch (error) {
              console.error("Error al guardar la respuesta en Firestore:", error);
            }
          }
        });

        divPregunta.appendChild(btnOpcion);
      });

      preguntasLista.appendChild(divPregunta);
    });
  }

  // Utilidad para mezclar opciones
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Utilidad para decodificar HTML
  function decodeHTML(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
}
