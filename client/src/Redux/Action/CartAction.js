export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const REMOVE_FORM_CART = "REMOVE_FORM_CART";
export const REMOVE_ALL_FORM_CART = "REMOVE_ALL_FORM_CART";

export const addToCart = (food, quantity) => {
    return {
        type: ADD_TO_CART,
        foodId: food._id || food.id,
        name: food.name,
        price: food.price,
        img: food.img,
        quantity: quantity,
    };
};
export const updateQuantity = (foodId, quantity) => {
    return {
        type: UPDATE_QUANTITY,
        foodId: foodId,
        quantity: quantity,
    };
};
export const removeFormCart = (foodId) => {
    return {
        type: REMOVE_FORM_CART,
        foodId: foodId,
    };
};
export const removeAllFormCart = () => {
    return {
        type: REMOVE_ALL_FORM_CART,
    };
};
