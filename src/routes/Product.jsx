// DEPENDENCIES 
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// STYLES 
import "../css/Home.css";

// COMPONENT

import DeliveryCard from "../components/deliveryCard";
import PaymentCard from "../components/paymentCard";

//SCRIPT
function ProductDetails() {

    const { id } = useParams(); // get the id from the route

    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() =>{
        
        const urlProduct = `http://localhost:3000/products/${id}`;

        const fetchProduct = async() => {
            try {
              const response = await fetch(urlProduct);
              if (!response.ok) {
                throw new error (`Error: ${response.status}`)
              }
              const jsonData = await response.json();
              console.log(jsonData);
              setData(jsonData);
            } catch (error) {
              setError(error.message);
            } finally {
              setLoading(false);
            }
            
        };

      fetchProduct(); 
    },[id]);

    if (loading) return <p>Loading Data...</p>;
    if (error) return <p>Error: {error}</p>;



    return (
      <div className="productDetail__Container">
        {data ? (

          <div className="product__Card">
            <div className="product__Im">
              <h2 className="Title"> {data.product__ShortDescription} </h2>
              <img src={data.product__image} alt="" />
            </div>
            <div className="product__Info">
              <div className="details">
                <div className="detail__Text">
                  <h2> {data.product__ShortDescription} </h2>
                  <p> {data.product__Description} </p>
                </div>
                <div className="foodTime">
                  <h3> {data.product__Food__Time} </h3>
                </div>
              </div>
              <div className="components">
                < DeliveryCard />
                < PaymentCard />
              </div>
            </div>
          </div>
    
      ) : ( 
          <p> not found </p>
      )}

      </div>
    );
}

export default ProductDetails;