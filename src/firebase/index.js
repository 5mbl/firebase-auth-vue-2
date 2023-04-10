import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyC2azMgJbGR59Pwzmt8q42V-0imptBrUxk",
    authDomain: "vue-fire-auth-de468.firebaseapp.com",
    projectId: "vue-fire-auth-de468",
    storageBucket: "vue-fire-auth-de468.appspot.com",
    messagingSenderId: "601412804236",
    appId: "1:601412804236:web:728f4bf97c99e5ad48e5a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }