// DEPENDENCIES 
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// STYLES 
import "../css/Home.css";

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

          <div className="product__Image">
              <img src={data.product__image} alt="" />
          </div>
        ) : ( 
          <p> not found </p>
      )}
      </div>
    );
}

export default ProductDetails;