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
                    <div className="loginForm">
                    <h1> WELCOME </h1>
                        <div className="registroGit">
                            <div className="git">
                                <img src={gitIcon} alt="" />
                                <Link to='/'>
                                    JOIN US WITH GIT                              
                                </Link>
                            </div>
                        </div>
                        <button className="registroGoogle" onClick={signUpWithGoogle}>
                            <div className="google">
                                <img src={googleIcon} alt="" />
                                {/* <Link to='/'> */}
                                    JOIN US WITH GOOGLE                             
                                {/* </Link> */}
                            </div>
                        </button>
                        <div className="RegistroDiscord">
                            <div className="discord">
                                <img src={discordIcon} alt="" />
                                <Link to='/'>
                                    JOIN US WITH DISCORD                              
                                </Link>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="registroManual">
                            <div className="inputEmail">
                                <input type="email" placeholder="EMAIL" />
                            </div>
                            <div className="inputPassword">
                                <input type="password" placeholder="PASSWORD" />
                            </div>
                            <div className="inputButton">
                                <button>
                                    <Link to='/login'>
                                        JOIN US
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default Register;