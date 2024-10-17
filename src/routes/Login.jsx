// DEPENDENCIES IMPORTATIONS
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig.js"
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

// STYLES IMPORTATION
import "../css/Login.css";

//IMAGE IMPORTATION
import gitIcon from "../assets/img/git.svg";
import googleIcon from "../assets/img/google.svg";  
import discordIcon from "../assets/img/discord.svg";

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
            <div className="LoginContainer">
                    <div className="loginForm">
                        <div className="registroGit">
                            <div className="git">
                                <img src={gitIcon} alt="" />
                                <Link to='/'>
                                    ENTER WITH GIT                              
                                </Link>
                            </div>
                        </div>
                        <div className="registroGoogle">
                            <button className="google" onClick={signInWithGoogle}>
                                <img src={googleIcon} alt="" />
                                {/* <Link to='/'> */}
                                    ENTER WITH GOOGLE                             
                                {/* </Link> */}
                            </button>
                        </div>
                        <div className="RegistroDiscord">
                            <div className="discord" >
                                <img src={discordIcon} alt="" />
                                <Link to='/'>
                                    ENTER WITH DISCORD                              
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
                                    <Link to='/home'>
                                        ENTER
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Login;