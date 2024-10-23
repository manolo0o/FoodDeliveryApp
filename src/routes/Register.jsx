// REACT
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// FIREBASE 
import { auth } from "../firebaseConfig.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

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
    const [error, setError] = useState('');
   // const googleProvider = new GoogleAuthProvider;
    const navigate = useNavigate();


    // GOOGLE SIGN UP
    // const signUpWithGoogle = async () => {
    //     try{
    //         const result = await signInWithPopup( auth, googleProvider);
    //         console.log('User signed in successfully: ', result.user);
    //     } catch (error) {
    //         console.error('Error signing in with Google', error.message);
    //     }
    // }    

    // SIGN UP WITH EMAIL & PASSWORD
    const handleRegister = async (e) => {
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/login')
        } catch (error) {
            setError(error.message);
        }
    };
    
    return (
        <>
            <div className="RegisterContainer">
                        <div className="section__Title">
                            <h1>Create Account</h1>
                            <h3>Create an account to access all the features of Food Delivery App</h3>
                        </div>
                        <div className="form__Register">
                            <form className="inputEmail"  onSubmit={handleRegister}>
                                <input 
                                    type="email" 
                                    placeholder="Email"
                                    className="input__Email__Register"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <input 
                                    type="password" 
                                    placeholder="Password"
                                    className="input__Pasword"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <input 
                                    type="password" 
                                    placeholder="Confirm Password" 
                                    className="input__Confirm__Password"
                                    //value={password}
                                    //required
                                />
                                <button type="submit" className="signUp__Button"> Sign Up</button>
                                {error && <p>{error}</p>}
                            </form>
                        </div>
                            <div className="already__Have">
                            <Link to='/login'>
                                <p> Already have an account</p>
                            </Link>
                        </div>
                            <p className="continue__With">Or continue with</p>
                        <div className="social__Media__SigIn">
                            <button /* onClick={signUpWithGoogle}*/ className="google__Icon">
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
    );
};

export default Register;