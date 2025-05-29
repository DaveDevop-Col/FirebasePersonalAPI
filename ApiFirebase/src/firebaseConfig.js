// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
