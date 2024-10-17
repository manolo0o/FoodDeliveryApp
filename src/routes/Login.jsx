// DEPENDENCIES IMPORTATIONS
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig.js"
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

// STYLES IMPORTATION
import "../css/Login.css";

//IMAGE IMPORTATION
// import gitIcon from "../assets/img/git.svg";
// import googleIcon from "../assets/img/google.svg";  
// import discordIcon from "../assets/img/discord.svg";

// SCRIPT
const Login = () => {
    const googleProvider = new GoogleAuthProvider();

    // SIGN IN  
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log('Google Sign-in successful', result.user);
        } catch (error) {
            console.error('Google Sign-in failed', error);
        }
    };

    // LOGOUT
    // const handleLogout = async() => {
    //     try{
    //         await signOut(auth);
    //         console.log('User signed out');
    //     } catch (error) {
    //         console.error('Failed to log out', error);
    //     }
    // };

    return (
        <>
        
        </>
    )
}

export default Login;