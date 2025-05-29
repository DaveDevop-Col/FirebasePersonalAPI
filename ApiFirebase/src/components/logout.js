import { auth } from '../firebaseConfig.js';
import { signOut } from 'firebase/auth';

export async function cerrarSesion() {
  try {
    await signOut(auth);
    // El listener onAuthStateChanged en main.js actualizará la UI
  } catch (error) {
    console.error('Error cerrando sesión:', error);
  }
}
