// src/components/login.js
import { auth } from '../firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

export function mostrarLogin(container) {
  container.innerHTML = `
    <h2>Login</h2>
    <form id="form-login">
      <input type="email" id="email" placeholder="Correo electrónico" required />
      <input type="password" id="password" placeholder="Contraseña" required />
      <button type="submit">Iniciar sesión</button>
    </form>
    <p id="error-msg" style="color: red;"></p>
  `;

  const form = container.querySelector('#form-login');
  const errorMsg = container.querySelector('#error-msg');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      errorMsg.textContent = '';
      form.reset();
      alert('¡Inicio de sesión exitoso!'); // O aquí actualizas la UI
    } catch (error) {
      // Mensajes simples según el error
      if (error.code === 'auth/user-not-found') {
        errorMsg.textContent = 'Usuario no encontrado.';
      } else if (error.code === 'auth/wrong-password') {
        errorMsg.textContent = 'Contraseña incorrecta.';
      } else if (error.code === 'auth/invalid-email') {
        errorMsg.textContent = 'Correo inválido.';
      } else {
        errorMsg.textContent = 'Error: ' + error.message;
      }
    }
  });
}
