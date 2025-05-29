// src/components/registro.js
import { auth } from '../firebaseConfig.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export function mostrarRegistro(container) {
  container.innerHTML = `
    <div id="registro">
      <h2>Registrarse</h2>
      <form id="formRegistro">
        <input type="text" id="nombre" placeholder="Nombre" required />
        <input type="email" id="email" placeholder="Correo" required />
        <input type="password" id="password" placeholder="Contraseña" required />
        <button type="submit">Registrarse</button>
      </form>
      <p id="mensajeRegistro" style="color: red;"></p>
    </div>
  `;

  const form = container.querySelector('#formRegistro');
  const mensaje = container.querySelector('#mensajeRegistro');

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Guardar datos extra en Firestore
      await setDoc(doc(db, "usuarios", user.uid), {
        nombre: nombre,
        email: email,
        fechaRegistro: new Date()
      });

      mensaje.style.color = 'green';
      mensaje.textContent = "Registro exitoso! Ya puedes iniciar sesión.";
      form.reset();

    } catch (error) {
      mensaje.style.color = 'red';
      // Mensajes más amigables
      let textoError = '';
      switch(error.code) {
        case 'auth/email-already-in-use':
          textoError = 'El correo ya está en uso.';
          break;
        case 'auth/invalid-email':
          textoError = 'Correo inválido.';
          break;
        case 'auth/weak-password':
          textoError = 'La contraseña es muy débil. Mínimo 6 caracteres.';
          break;
        default:
          textoError = error.message;
      }
      mensaje.textContent = `Error: ${textoError}`;
    }
  });

  // Limpiar mensaje cuando usuario escribe
  form.nombre.addEventListener('input', () => mensaje.textContent = '');
  form.email.addEventListener('input', () => mensaje.textContent = '');
  form.password.addEventListener('input', () => mensaje.textContent = '');
}
