// DEPENDENCIES 
import React, { useEffect, useState} from "react";

// STYLES 
import "../css/Components.css";


// IMAGES
import flameIcon from '../assets/img/flame.svg';
import { Link } from "react-router-dom";


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
      <div className="ProductCardList"> {/* Un contenedor que envuelve todas las tarjetas para un mejor control de estilos */}
        {data.map((product) => (
          <div key={product._id} className="ProductCard">
            <Link to={`/product/${product._id}`} className="ProductCard__link">
              <div className="ProductCard__leftContent">
                <h3>{product.product__Food__Time}</h3>
                <h1>{product.product__ShortDescription}</h1>
                <p>{product.product__Description}</p>
              </div>
              <div className="ProductCard__rightContent">
                <img src={product.product__image} alt="productImage" className="ProductCard__image" />
                <div className="ProductCard__kcalContainer">
                  <img src={flameIcon} alt="flameIcon" className="ProductCard__FlameIcon" />
                  <p>{product.product__calories} kcal</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
}

export default ProductCard;