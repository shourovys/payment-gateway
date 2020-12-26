import React from "react";
import { useSelector } from "react-redux";
import SquareBtn from "../Common/SquareBtn/SquareBtn";
import SkeletonCard from "../Skeleton/SkeletonCard/SkeletonCard";
import FoodItemCard from "./FoodItemCard/FoodItemCard";
import "./FoodItemContainer.css";

const FoodItemContainer = () => {
    const foodsData = useSelector((state) => state.foodsData);
    const cartData = useSelector((state) => state.cartData.cart);

    return (
        <>
            <div className="FoodItemContainer">
                {foodsData.length > 0
                    ? foodsData.map((food) => (
                          <FoodItemCard key={food._id} food={food} />
                      ))
                    : [1, 2, 3, 4, 5, 6].map((n) => <SkeletonCard key={n} />)}
            </div>
            <SquareBtn isActive={cartData.length > 0} path="/order">
                Review Orders
            </SquareBtn>
        </>
    );
};

export default FoodItemContainer;
