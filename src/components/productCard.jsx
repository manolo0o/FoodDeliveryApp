// DEPENDENCIES 
import React, { useEffect, useState} from "react";

// STYLES 
import "../css/Home.css";

// IMAGES

import flameIcon from '../assets/img/flame.svg';

//SCRIPT

function ProductCard() {

  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(null);
  const [ error, setError ] = useState(null);

    useEffect(() =>{

      const urlProducts = 'http://localhost:3000/products';

      const fetchProducts = async () => {
        try{
          const response = await fetch(urlProducts);
          if (!response.ok) {
            throw new error(`Error: ${response.status}`);
          }
          const jsonData = await response.json();
          setData(jsonData);
        } catch( error ) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchProducts();
    },[]);

    if (loading) return <p>Loading Data...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <>
          {data.map((products) =>(
            <div key={products._id} className="ProductCard">
              <div className="leftContent">
                <h3> {products.product__Food__Time}</h3>
                <h1> {products.product__ShortDescription} </h1>
                <p> {products.product__Description} </p>
              </div>
              <div className="rightContent">
                <img src={products.product__image} alt="productImage" className="productImage" /> 
                <div className="kcalContainer">
                    <img src={flameIcon} alt="flameIcon" className="FlameIcon" /> 
                  <p> 
                    {products.product__calories} kcal 
                  </p>
                </div>
              </div>
            </div>
          ))}
      </>
    )
}

export default ProductCard;