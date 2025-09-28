// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBKdJgqDXnVIKTDH2FbX5QhdDqK96XIgiw",
    authDomain: "netflixgpt-dd85d.firebaseapp.com",
    projectId: "netflixgpt-dd85d",
    storageBucket: "netflixgpt-dd85d.firebasestorage.app",
    messagingSenderId: "205194680287",
    appId: "1:205194680287:web:959d4a5d452568d19d166a",
    measurementId: "G-TLEN7QSV8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();