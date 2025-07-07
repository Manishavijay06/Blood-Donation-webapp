// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNsA6_ib9XTJ4iw9PABVd47P6wEjDyk8U",
    authDomain: "blood-donation-webapp-b83a0.firebaseapp.com",
    projectId: "blood-donation-webapp-b83a0",
    storageBucket: "blood-donation-webapp-b83a0.firebasestorage.app",
    messagingSenderId: "148906594890",
    appId: "1:148906594890:web:873d9d6e1bb6eeb6944cb3",
    measurementId: "G-N5RPP8KF8X"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);   
const auth = getAuth(app);
export {auth,db};
export default app;