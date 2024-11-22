// DEPENDENCIES 
import React, { useEffect, useState} from "react";

// STYLES 
import "../css/Components.css";

// IMAGES
import Arrow from '../assets/img/arrow.svg'


// SCRIPT

function PaymentCard() {

    return (
        <div className="payment-Card_Container">
          <div className="content_Container">
            <h2>Make Payment</h2>
          </div>
          <div className="arrow_Container">
            <img src={Arrow} />
          </div>
        </div>
    )
}

export default PaymentCard;