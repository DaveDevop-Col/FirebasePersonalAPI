// src/components/inicio.js
export function mostrarInicio(container) {
  container.innerHTML = `
    <div id="inicio-container">
      <style>
        #inicio-container {
          font-family: 'Arial', sans-serif;
          max-width: 600px;
          margin: 2rem auto;
          padding: 2.5rem;
          text-align: center;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          overflow: hidden; /* Evita scroll */
        }
        .inicio-titulo {
          color: #3a0ca3;
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
          font-weight: 700;
          background: linear-gradient(90deg, #3a0ca3 0%, #4361ee 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .inicio-divider {
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #4361ee 0%, #4cc9f0 100%);
          margin: 1.25rem auto;
          border-radius: 4px;
        }
        .inicio-descripcion {
          color: #4a4e69;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .inicio-info {
          background: rgba(67, 97, 238, 0.05);
          padding: 1.5rem;
          border-radius: 12px;
          margin-top: 2rem;
          border-left: 4px solid #4361ee;
          text-align: left;
        }
        .inicio-info h3 {
          color: #3a0ca3;
          margin-top: 0;
          font-size: 1.2rem;
        }
        .inicio-info ul {
          padding-left: 1.2rem;
          color: #4a4e69;
        }
        .inicio-info li {
          margin-bottom: 0.5rem;
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          #inicio-container {
            padding: 1.5rem;
            margin: 1rem;
          }
          .inicio-titulo {
            font-size: 2rem;
          }
        }
      </style>

      <h1 class="inicio-titulo">Bienvenido a Trivia App</h1>
      <div class="inicio-divider"></div>
      <p class="inicio-descripcion">
        Explora nuestro universo de preguntas por categorías.<br>
        Pon a prueba tu conocimiento y descubre datos fascinantes.
      </p>
      
      <div class="inicio-info">
        <h3>¿Cómo funciona?</h3>
        <ul>
          <li>Selecciona una categoría de tu interés</li>
          <li>Responde preguntas de dificultad variada</li>
          <li>Descubre inmediatamente si acertaste</li>
          <li>Guarda tus preguntas favoritas para repasar luego</li>
          <li>Mejora tus puntuaciones con cada intento</li>
        </ul>
      </div>
    </div>
  `;
}