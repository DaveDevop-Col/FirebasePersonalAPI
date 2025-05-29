// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMlhFWR-oqSAegmtbzhOxOXWqEee1BFio",
  authDomain: "personalapifirebase.firebaseapp.com",
  projectId: "personalapifirebase",
  storageBucket: "personalapifirebase.firebasestorage.app",
  messagingSenderId: "905937653183",
  appId: "1:905937653183:web:cee836697f0ab0f23ae50a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
