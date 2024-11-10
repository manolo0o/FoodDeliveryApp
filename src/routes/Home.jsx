// DEPENDENCIES IMPORTATIONS
import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";

// STYLES IMPORTATION
import "../css/Home.css";

//IMAGE IMPORTATION
import userIcon from "../assets/img/userIcon.svg";
import barIcon from "../assets/img/barIcon.svg";
import searchIcon from "../assets/img/search.svg";
// SCRIPT
function Home() {

    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(null);
    const [ error, setError ] = useState(null);

    useEffect(() =>{

        const urlCategories = 'http://localhost:3000/categories'

        const fetchData = async () => {
            try{
                const response = await fetch(urlCategories);
                if (!response.ok) {
                    throw new error(`Error: ${response.status}`);
                }
            } catch( error ){
                
            } finally {

            }
        }
    })

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