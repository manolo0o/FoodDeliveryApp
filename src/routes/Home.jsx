// DEPENDENCIES IMPORTATIONS
import React from "react";
import { Link } from "react-router-dom";

// STYLES IMPORTATION
import "../css/Home.css";

//IMAGE IMPORTATION
import userIcon from "../assets/img/userIcon.svg";
import barIcon from "../assets/img/barIcon.svg";
import searchIcon from "../assets/img/search.svg";
// SCRIPT
function Home() {
    return (
        <>
            <div className="HomeContainer">
                <div className="userContainer">
                    <div className="userImg">
                        <img src= {userIcon}alt="userImage" className="userIcon"/>
                        <h1> Hello </h1>
                    </div>
                    <img src={barIcon} className="navBarIcon" />
                </div>
                <div className="inputContainer">
                    <input type="text" />
                    <button type="submit">
                        <img src={searchIcon} alt="" />
                    </button>
                </div>
                <div className="foodCategory">
                    <h1>Food Category</h1>
                    
                </div>
            </div>
        </>
    )
}

export default Home;