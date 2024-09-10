// Importa le funzioni necessarie dai pacchetti SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyCB1PguT3HrZWuHjmyWrVHUDs16B6QUJFg",
            authDomain: "test-bd-98d86.firebaseapp.com",
            databaseURL: "https://test-bd-98d86-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "test-bd-98d86",
            storageBucket: "test-bd-98d86.appspot.com",
            messagingSenderId: "58269920049",
            appId: "1:58269920049:web:06e5949053dcf70e6f9e10",
            measurementId: "G-EEX9KP5WXK"
            };

// Inizializza Firebase
const app = initializeApp(firebaseConfig);

// Inizializza Firebase Authentication e ottieni un riferimento al servizio
const auth = getAuth(app);

export { app, auth };
