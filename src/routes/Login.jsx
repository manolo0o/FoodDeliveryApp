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
            <div className="principal__Container">
                <div className="welcome__Container">
                    <h1>Login here</h1>
                    <h2>Welcome back you’ve <br /> been missed!</h2>
                </div>
                <div className="form__Container">
                    <form>
                        <input 
                            type="email"
                            placeholder="Email"
                            className="input__Email"
                            required
                            />
                        <input 
                            type="password"
                            placeholder="Password"
                            className="input__Password"
                            required
                        />
                        <p> forgot your password? </p>
                        <button type="submit" className="signInButton"> Sign In </button>
                    </form>
                </div>
                    <div className="create__Account">
                        <Link to='/Register'>
                            <p> Create new account</p>
                        </Link>
                    </div>
                        <p className="continue__With">Or continue with</p>
                    <div className="social__Media__SigIn">
                        <button onClick={signInWithGoogle} className="google__Icon">
                            <img src={googleIcon} alt="googleIcon" />
                        </button>
                        <button className="discord__Icon">
                            <img src={discordIcon} alt="discordIcon" />
                        </button>
                        <button className="git__Icon">
                            <img src={gitIcon} alt="gitIcon" />
                        </button>
                    </div>
            </div>
        </>
    )
}

export default Login;