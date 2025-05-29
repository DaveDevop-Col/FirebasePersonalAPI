import { initializeApp } from 'firebase/app'; 
import { getAuth } from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = { 
  apiKey: "AIzaSyC_dOmGzOoD3M_gDxlZhi8LXlR07U4hZbg",
  authDomain: "iapp-89d5b.firebaseapp.com",
  projectId: "iapp-89d5b",
  storageBucket: "iapp-89d5b.firebasestorage.app",
  messagingSenderId: "35505483631",
  appId: "1:35505483631:web:c903f52dafe8a645d9429a"
}; 

const app = initializeApp(firebaseConfig); 
const auth = getAuth(app); 
const db = getFirestore(app); 

export { auth, db };
