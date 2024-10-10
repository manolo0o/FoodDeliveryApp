// DEPENDENCIES IMPORTATIONS
import React from "react";
import { Link } from "react-router-dom";

// STYLES IMPORTATION
import "../css/Register.css";

//IMAGE IMPORTATION
import gitIcon from "../assets/img/git.svg";
import googleIcon from "../assets/img/google.svg";  
import discordIcon from "../assets/img/discord.svg";

// SCRIPT
function Register() {
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
                        <div className="registroGoogle">
                            <div className="google">
                                <img src={googleIcon} alt="" />
                                <Link to='/'>
                                    JOIN US WITH GOOGLE                             
                                </Link>
                            </div>
                        </div>
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