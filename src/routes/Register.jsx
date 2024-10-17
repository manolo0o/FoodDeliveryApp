// DEPENDENCIES IMPORTATIONS
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig"
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';

// STYLES IMPORTATION
import "../css/Register.css";

//IMAGE IMPORTATION
import gitIcon from "../assets/img/git.svg";
import googleIcon from "../assets/img/google.svg";  
import discordIcon from "../assets/img/discord.svg";

// SCRIPT
const  Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const googleProvider = new GoogleAuthProvider;

    // GOOGLE SIGN UP
    const signUpWithGoogle = async () => {
        try{
            const result = await signInWithPopup( auth, googleProvider);
            console.log('User signed in successfully: ', result.user);
        } catch (error) {
            console.error('Error signing in with Google', error.message);
        }
    }    

    // SIGN UP WITH EMAIL & PASSWORD
    const handleRegister = async (e) => {
        e.preventDefault();
        try{
            const result  = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User signed in successfully: ', result.user );
        } catch (error) {
            console.error('Error signing up with email and password', error.message);
        }
    }
    
    return (
        <>
            <div className="RegisterContainer">
                        <div className="line"></div>
                        <div className="registroManual">
                            <form className="inputEmail"  onSubmit={handleRegister}>
                                <input 
                                    type="email" 
                                    placeholder="EMAIL"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <input 
                                    type="password" 
                                    placeholder="PASSWORD" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button type="submit" className="inputButton"> JOIN US </button>
                            </form>
                        </div>
                    </div>
        </>
    );
};

export default Register;