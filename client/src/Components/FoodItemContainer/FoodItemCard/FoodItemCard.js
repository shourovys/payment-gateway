import React from "react";
import AddToCartBtn from "../../Common/AddToCartBtn/AddToCartBtn";
import "./FoodItemCard.css";

const FoodItem = ({ food }) => {
    const { _id, name, price, img, shotDescription } = food;
    return (
        <div className="foodItem">
            <div className="foodItemInfo">
                <img src={img} alt="" />
                <h4>{name}</h4>
                <p>{shotDescription}</p>
                <h2>₹{price}</h2>
            </div>
            <AddToCartBtn foodId={_id} quantity={1} food={food} />
        </div>
    );
};

export default FoodItem;
