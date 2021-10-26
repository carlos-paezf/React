import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyA1dtQnRbFpnpZFElDO9YUHGL8L4sTfhE0",
    authDomain: "plataforma-juegos.firebaseapp.com",
    projectId: "plataforma-juegos",
    storageBucket: "plataforma-juegos.appspot.com",
    messagingSenderId: "1042370407187",
    appId: "1:1042370407187:web:f33f65d513a51fdabf48e6",
    measurementId: "G-850J5Q0WLF"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const googleAuthProvider = new GoogleAuthProvider() 


export { db, googleAuthProvider }
