// DEPENDENCIES 
import React, { useEffect, useState} from "react";
import { json, Link } from "react-router-dom";

// STYLES 
import "../css/Home.css";

// COMPONENTS
import ProductCard from "../components/productCard.jsx";

// IMAGE 
import userIcon from "../assets/img/userIcon.svg";
import barIcon from "../assets/img/barIcon.svg";
import searchIcon from "../assets/img/search.svg";


// SCRIPT
function Home() {

  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(null);
  const [ error, setError ] = useState(null);

    useEffect(() =>{
        
        const urlCategories = 'http://localhost:3000/categories';

        const fetchCategories = async () => {
            try{
                const response = await fetch(urlCategories);
                if (!response.ok) {
                    throw new error(`Error: ${response.status}`);
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch( error ){
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) return <p>Loading Data...</p>;
    if (error) return <p>Error: {error}</p>;

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
                    <h3>Food Category</h3>
                    <ul>
                      {data.map((category) => (
                        <li key={category._id}>
                          <img src={category.category__Image} alt="" />
                          <p> {category.category__Name} </p>
                        </li>
                      ))}
                    </ul>
                </div>
                < ProductCard />
            </div>
        </>
    )
}

export default Home;