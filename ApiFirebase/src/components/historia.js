// src/components/historia.js
export function mostrarHistoria(container) {
  container.innerHTML = `
    <div id="historia-container">
      <style>
        #historia-container {
          font-family: 'Segoe UI', system-ui, sans-serif;
          max-width: 800px;
          margin: 2rem auto;
          padding: 2rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
        .historia-title {
          color: #3a0ca3;
          font-size: 2.2rem;
          margin-bottom: 1.5rem;
          text-align: center;
          position: relative;
        }
        .historia-title:after {
          content: "";
          display: block;
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #7209b7 0%, #f72585 100%);
          margin: 1rem auto 0;
          border-radius: 2px;
        }
        .historia-card {
          background: #f8f9fa;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          border-left: 4px solid #7209b7;
        }
        .historia-card h3 {
          color: #3a0ca3;
          margin-bottom: 0.8rem;
          font-size: 1.3rem;
        }
        .historia-card p {
          color: #4a4e69;
          line-height: 1.6;
        }
        .historia-timeline {
          position: relative;
          padding-left: 2rem;
          margin: 2rem 0;
        }
        .timeline-item {
          position: relative;
          padding-bottom: 2rem;
          padding-left: 2rem;
        }
        .timeline-item:before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #7209b7;
          border: 3px solid #b5179e;
        }
        .timeline-item:after {
          content: "";
          position: absolute;
          left: 7px;
          top: 16px;
          width: 2px;
          height: 100%;
          background: #b5179e;
        }
        .timeline-date {
          font-weight: 600;
          color: #f72585;
          margin-bottom: 0.5rem;
        }
        .timeline-content {
          background: white;
          padding: 1rem;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
      </style>

      <h1 class="historia-title">Evolución de las Trivias Digitales</h1>
      
      <div class="historia-card">
        <h3>Los Orígenes</h3>
        <p>Los juegos de preguntas y respuestas existen desde la antigüedad, pero su versión digital comenzó con los primeros videojuegos educativos en los años 80. El famoso "Trivial Pursuit" (1981) inspiró la transición al formato digital.</p>
      </div>
      
      <div class="historia-timeline">
        <div class="timeline-item">
          <div class="timeline-date">1990-1995</div>
          <div class="timeline-content">
            <h3>Primeras trivias en CD-ROM</h3>
            <p>Títulos como "You Don't Know Jack" revolucionaron el género combinando humor con preguntas desafiantes, estableciendo el estándar para las trivias digitales modernas.</p>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-date">1998-2005</div>
          <div class="timeline-content">
            <h3>La era de los juegos de TV</h3>
            <p>"¿Quién quiere ser millonario?" y otros shows llevaron las trivias a la cultura popular, generando adaptaciones digitales que permitían jugar desde casa.</p>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-date">2010-2015</div>
          <div class="timeline-content">
            <h3>Explosión móvil</h3>
            <p>Con la popularización de smartphones, apps como QuizUp alcanzaron 20 millones de usuarios en su primer año, demostrando el potencial global de las trivias digitales.</p>
          </div>
        </div>
      </div>
      
      <div class="historia-card">
        <h3>La Revolución API</h3>
        <p>La creación de APIs públicas como Open Trivia Database (2013) democratizó el desarrollo, permitiendo que proyectos independientes (como esta app) puedan acceder a bancos de preguntas profesionales sin coste.</p>
      </div>
      
      <div class="historia-card" style="background: #fff0f7; border-left-color: #f72585;">
        <h3>El Futuro</h3>
        <p>Las trivias modernas incorporan inteligencia artificial para adaptar preguntas al nivel del jugador, realidad aumentada para experiencias inmersivas, y blockchain para sistemas de recompensas descentralizadas.</p>
      </div>
    </div>
  `;
}