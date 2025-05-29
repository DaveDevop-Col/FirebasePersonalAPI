// perfil.js
import { auth, db } from '../../firebaseConfig.js';
import { doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

export function mostrarPerfil(container) {
  container.innerHTML = `
    <div id="perfil">
      <h2>Mi Perfil</h2>
      <form id="formPerfil">
        <input type="text" id="nombre" placeholder="Nombre" required />
        <input type="email" id="email" placeholder="Correo" disabled />
        <button type="submit">Guardar Cambios</button>
      </form>
      <div id="mensajePerfil"></div>
    </div>
  `;

  const form = container.querySelector('#formPerfil');
  const mensaje = container.querySelector('#mensajePerfil');

  // Cargar datos actuales
  const user = auth.currentUser;
  if (!user) {
    container.innerHTML = '<p>No estás autenticado.</p>';
    return;
  }

  const docRef = doc(db, "usuarios", user.uid);

  getDoc(docRef).then(docSnap => {
    if (docSnap.exists()) {
      const data = docSnap.data();
      form.nombre.value = data.nombre || '';
      form.email.value = user.email || '';
    } else {
      mensaje.textContent = "No se encontraron datos del usuario.";
    }
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const nombreNuevo = form.nombre.value.trim();

    try {
      await updateDoc(docRef, { nombre: nombreNuevo });
      mensaje.textContent = "Perfil actualizado correctamente.";
    } catch (error) {
      mensaje.textContent = `Error al actualizar: ${error.message}`;
    }
  });
}
