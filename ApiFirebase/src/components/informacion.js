// src/components/informacion.js
export function mostrarInformacion(container) {
  container.innerHTML = `
    <div id="trivia-general-container">
      <style>
        #trivia-general-container {
          font-family: 'Segoe UI', system-ui, sans-serif;
          max-width: 800px;
          margin: 2rem auto;
          padding: 2rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
        .info-main-title {
          color: #3a0ca3;
          font-size: 2.2rem;
          margin-bottom: 1.5rem;
          text-align: center;
          position: relative;
        }
        .info-main-title:after {
          content: "";
          display: block;
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #4361ee 0%, #4cc9f0 100%);
          margin: 1rem auto 0;
          border-radius: 2px;
        }
        .info-section {
          margin-bottom: 2rem;
        }
        .info-subtitle {
          color: #3a0ca3;
          font-size: 1.4rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #f8f9fa;
        }
        .info-text {
          color: #4a4e69;
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        .info-feature {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 8px;
        }
        .feature-icon {
          font-size: 1.5rem;
          margin-right: 1rem;
          color: #4361ee;
        }
        .feature-content h4 {
          color: #2b2d42;
          margin-bottom: 0.5rem;
        }
        .feature-content p {
          color: #6c757d;
          margin: 0;
        }
        .info-tip {
          background: #e0fbfc;
          padding: 1rem;
          border-radius: 8px;
          margin: 1.5rem 0;
          border-left: 4px solid #4cc9f0;
        }
      </style>

      <h1 class="info-main-title">El Poder Educativo de las Trivias</h1>
      
      <div class="info-section">
        <h2 class="info-subtitle">¿Por qué son efectivas las trivias?</h2>
        <p class="info-text">Las trivias son mucho más que un simple juego. Representan una poderosa herramienta educativa que combina aprendizaje y entretenimiento:</p>
        
        <div class="info-feature">
          <div class="feature-icon">🧠</div>
          <div class="feature-content">
            <h4>Aprendizaje activo</h4>
            <p>Al responder preguntas, tu cerebro procesa y retiene información más eficientemente que con métodos pasivos</p>
          </div>
        </div>
        
        <div class="info-feature">
          <div class="feature-icon">🔄</div>
          <div class="feature-content">
            <h4>Refuerzo de conocimiento</h4>
            <p>Las repeticiones espaciadas en trivias ayudan a consolidar memorias a largo plazo</p>
          </div>
        </div>
      </div>
      
      <div class="info-section">
        <h2 class="info-subtitle">Tipos de preguntas en trivias</h2>
        
        <div class="info-feature">
          <div class="feature-icon">A</div>
          <div class="feature-content">
            <h4>Opción múltiple</h4>
            <p>El formato más común, con varias respuestas posibles donde solo una es correcta</p>
          </div>
        </div>
        
        <div class="info-feature">
          <div class="feature-icon">✓</div>
          <div class="feature-content">
            <h4>Verdadero/Falso</h4>
            <p>Preguntas binarias que evalúan comprensión rápida de conceptos</p>
          </div>
        </div>
        
        <div class="info-feature">
          <div class="feature-icon">🔤</div>
          <div class="feature-content">
            <h4>Respuesta corta</h4>
            <p>Requieren recordar información específica sin opciones de ayuda</p>
          </div>
        </div>
      </div>
      
      <div class="info-tip">
        <strong>Dato interesante:</strong> Las trivias médicas son utilizadas en hospitales universitarios como método de enseñanza, mostrando una mejora del 23% en retención de conocimientos según estudios recientes.
      </div>
      
      <div class="info-section">
        <h2 class="info-subtitle">Beneficios cognitivos</h2>
        <p class="info-text">Jugar trivias regularmente puede ayudar a:</p>
        <ul style="color: #4a4e69; line-height: 1.7; padding-left: 1.5rem;">
          <li>Mejorar la memoria y velocidad de recall</li>
          <li>Desarrollar pensamiento crítico y analítico</li>
          <li>Ampliar vocabulario y conocimiento general</li>
          <li>Reducir el riesgo de deterioro cognitivo</li>
          <li>Aumentar la capacidad de concentración</li>
        </ul>
      </div>
    </div>
  `;
}