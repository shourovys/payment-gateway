import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/Action/CartAction";
import { successNF } from "../../../Redux/Action/notificationsAction";
import "./AddToCartBtn.css";

const AddToCartBtn = ({ quantity, food }) => {
    const dispatch = useDispatch();
    return (
        <button
            onClick={() => {
                dispatch(addToCart(food, quantity));
                dispatch(successNF(`${food.name} added in cart`));
            }}
            className="btn add-to-cart-btn"
        >
            Add
        </button>
    );
};

export default AddToCartBtn;
