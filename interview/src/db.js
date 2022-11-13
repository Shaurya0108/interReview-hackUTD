import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app"
import API_KEY from "./env";
const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "interevie-180a1.firebaseapp.com",
    projectId: "interevie-180a1",
    storageBucket: "interevie-180a1.appspot.com",
    messagingSenderId: "288336554896",
    appId: "1:288336554896:web:cdacb9ab3c6417d3a66115"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db