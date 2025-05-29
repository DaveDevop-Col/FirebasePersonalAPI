// src/components/login.js
import { auth } from '../firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

export function mostrarLogin(container) {
  container.innerHTML = `
    <h2>Login</h2>
    <form id="form-login">
      <input type="email" id="correo" placeholder="Correo electrónico" required />
      <input type="password" id="contrasena" placeholder="Contraseña" required />
      <button type="submit">Iniciar sesión</button>
    </form>
    <p id="msg-error" style="color:red;"></p>
  `;

  const form = container.querySelector('#form-login');
  const msgError = container.querySelector('#msg-error');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const correo = form.correo.value.trim();
    const contrasena = form.contrasena.value.trim();

    try {
      await signInWithEmailAndPassword(auth, correo, contrasena);
      msgError.textContent = '';
      form.reset();
      // onAuthStateChanged actualizará la UI automáticamente
    } catch (error) {
      // Mensajes amigables comunes de Firebase
      let mensaje = '';
      switch(error.code) {
        case 'auth/user-not-found':
          mensaje = 'Usuario no encontrado.';
          break;
        case 'auth/wrong-password':
          mensaje = 'Contraseña incorrecta.';
          break;
        case 'auth/invalid-email':
          mensaje = 'Correo electrónico inválido.';
          break;
        default:
          mensaje = error.message;
      }
      msgError.textContent = mensaje;
    }
  });

  // Limpiar mensaje al cambiar inputs
  form.correo.addEventListener('input', () => msgError.textContent = '');
  form.contrasena.addEventListener('input', () => msgError.textContent = '');
}
