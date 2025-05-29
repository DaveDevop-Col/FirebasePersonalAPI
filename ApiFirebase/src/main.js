import { auth } from './firebaseConfig.js';
import { mostrarInicio } from './components/inicio.js';
import { mostrarCategoriasSection } from './components/categorias.js';
import { mostrarInformacion } from './components/informacion.js';
import { mostrarHistoria } from './components/historia.js';
import { mostrarFavoritos } from './components/favoritos.js';
import { mostrarAyuda } from './components/ayuda.js';
import { mostrarLogin } from './components/login.js';
import { mostrarRegistro } from './components/registro.js';
import { cerrarSesion } from './components/logout.js';

const app = document.getElementById('app');
const tabs = document.querySelectorAll('nav.tabs button');

function limpiarActivos() {
  tabs.forEach(tab => tab.classList.remove('active'));
}

// Secciones a las que solo puede entrar usuario logueado
const seccionesPrivadas = new Set([
  'tab-categorias',
  'tab-favoritos',
  'tab-ayuda',
  'tab-preguntas'  // agregué esta también porque en tu menú está
]);

function mostrarMensajeAccesoDenegado() {
  app.innerHTML = `
    <div style="padding: 20px; color: red;">
      <h2>Acceso denegado</h2>
      <p>Debes iniciar sesión para acceder a esta sección.</p>
    </div>
  `;
}

function actualizarMenu(user) {
  const logoutBtn = document.getElementById('tab-logout');
  const loginBtn = document.getElementById('tab-login');
  const registroBtn = document.getElementById('tab-registro');
  const perfilBtn = document.getElementById('tab-perfil');

  if (user) {
    logoutBtn.style.display = 'inline-block';
    loginBtn.style.display = 'none';
    registroBtn.style.display = 'none';
    perfilBtn.style.display = 'inline-block';
  } else {
    logoutBtn.style.display = 'none';
    loginBtn.style.display = 'inline-block';
    registroBtn.style.display = 'inline-block';
    perfilBtn.style.display = 'none';
  }
}

function init() {
  let usuarioLogueado = null;

  auth.onAuthStateChanged(user => {
    usuarioLogueado = user;
    actualizarMenu(user);

    if (user) {
      // Mostrar inicio u otra pestaña pública
      const activeTab = document.querySelector('nav.tabs button.active');
      const activeId = activeTab ? activeTab.id : null;

      if (!activeId || seccionesPrivadas.has(activeId) === false) {
        limpiarActivos();
        document.getElementById('tab-inicio').classList.add('active');
        mostrarInicio(app);
      }
    } else {
      // Mostrar login si no está logueado
      limpiarActivos();
      document.getElementById('tab-login').classList.add('active');
      mostrarLogin(app);
    }
  });

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      limpiarActivos();
      tab.classList.add('active');

      if (seccionesPrivadas.has(tab.id) && !usuarioLogueado) {
        mostrarMensajeAccesoDenegado();
        return;
      }

      switch(tab.id) {
        case 'tab-inicio':
          mostrarInicio(app);
          break;
        case 'tab-categorias':
          mostrarCategoriasSection(app);
          break;
        case 'tab-informacion':
          mostrarInformacion(app);
          break;
        case 'tab-historia':
          mostrarHistoria(app);
          break;
        case 'tab-favoritos':
          mostrarFavoritos(app);
          break;
        case 'tab-ayuda':
          mostrarAyuda(app);
          break;
        case 'tab-login':
          mostrarLogin(app);
          break;
        case 'tab-registro':
          mostrarRegistro(app);
          break;
        case 'tab-logout':
          cerrarSesion();
          break;
        case 'tab-preguntas':
          // Asumo que tienes un mostrarPreguntas si quieres mostrar esa sección
          // importarlo y usarlo si existe
          if (typeof mostrarPreguntas === 'function') {
            mostrarPreguntas(app);
          } else {
            app.innerHTML = `<h2>Sección Preguntas (pendiente)</h2>`;
          }
          break;
        case 'tab-perfil':
          // Aquí puedes mostrar información del perfil
          app.innerHTML = `
            <h2>Perfil de usuario</h2>
            <p>Correo: ${usuarioLogueado.email}</p>
            <p>UID: ${usuarioLogueado.uid}</p>
          `;
          break;
      }
    });
  });

  // Inicializar mostrando inicio o login según si está logueado
  auth.currentUser
    ? (() => {
        limpiarActivos();
        document.getElementById('tab-inicio').classList.add('active');
        mostrarInicio(app);
      })()
    : (() => {
        limpiarActivos();
        document.getElementById('tab-login').classList.add('active');
        mostrarLogin(app);
      })();
}

window.addEventListener('DOMContentLoaded', init);
