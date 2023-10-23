// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-cf6aa.firebaseapp.com",
    projectId: "mern-estate-cf6aa",
    storageBucket: "mern-estate-cf6aa.appspot.com",
    messagingSenderId: "1066248442095",
    appId: "1:1066248442095:web:0cda41dd39ef8f97490b1a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);