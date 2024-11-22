// DEPENDENCIES 
import React, { useEffect, useState} from "react";

// STYLES 
import "../css/Components.css";



// SCRIPT

function DeliveryCard() {

    return (
        <div className="deliveryCard__Container">
          <div className="lContent">
            <h2>Delivery Amount</h2>
            <p>Total Amount</p>
            <h2 className="Price">USD 3.00</h2>
          </div>
          <div className="rContent">
            <div className="containerPrice">
              <p>$ 3.00</p>
            </div>
          </div>            
        </div>
    )
}

export default DeliveryCard;