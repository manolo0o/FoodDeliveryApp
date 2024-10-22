// DEPENDENCIES IMPORTATIONS
import React from "react";
import { Link } from "react-router-dom";

// STYLES IMPORTATION
import "../css/Start.css";

//IMAGE IMPORTATION
import backgroundImage1 from "../assets/img/269.png";
import backgroundImage2 from "../assets/img/startIcon.png";
import continueButton from "../assets/img/continue.png";
import options from "../assets/img/options.png";

// SCRIPT
function Start() {
    return (
        <>
            <div className="StartContainer">
                <img src={backgroundImage1} className="backgroundImage1"/> 
                <img src={backgroundImage2} className="backgroundImage2"/> 
                    <div className="buttonContainer">
                        <button>
                            <img src={options} alt="options" />
                        </button> 
                        <button>
                            <Link to='/login'>
                                <img src={continueButton} alt="Continue" />
                            </Link>
                        </button>
                    </div>
            </div>
        </>
    );  
}

export default Start;