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
                <p>total amount</p>
                <h2>USD 3.00</h2>
            </div>
            <div className="rContent">
                <p>3.00</p>
            </div>            
        </div>
    )
}

export default DeliveryCard;