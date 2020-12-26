import React, { useEffect, useState } from "react";
import HandelQuantity from "../../Common/HandelQuantity/HandelQuantity";
import "./OrderedFood.css";

const OrderedFood = ({ cartFood, updateQuantity }) => {
    const { id, name, price, img } = cartFood;
    const [quantity, setQuantity] = useState(cartFood.quantity);

    useEffect(() => {
        updateQuantity(id, quantity);
    }, [quantity]);
    return (
        <div className="OrderedFood">
            <img src={img} alt="" className="small-img" />
            <div>
                <p>{name}</p>
                <h5>₹{price}</h5>
            </div>
            <HandelQuantity quantity={quantity} setQuantity={setQuantity} />
        </div>
    );
};

export default OrderedFood;
