// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDTCLbprgTKMEALNqGHDGlZjVbQufQP2gM",
    authDomain: "login-auth-64945.firebaseapp.com",
    projectId: "login-auth-64945",
    storageBucket: "login-auth-64945.appspot.com",
    messagingSenderId: "276779734474",
    appId: "1:276779734474:web:5bbfbf5cd71444009aeb33",
    measurementId: "G-9ZZ3THGDFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
