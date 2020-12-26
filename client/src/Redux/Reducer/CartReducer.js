import { ADD_TO_CART, REMOVE_ALL_FORM_CART, REMOVE_FORM_CART, UPDATE_QUANTITY } from "../Action/CartAction";

const cartState = {
    cart: JSON.parse(localStorage.getItem('cartFoods'))||[]
}

export const cartReducer = (state = cartState, action) => {
    const { cart } = state;
    switch (action.type) {
        case ADD_TO_CART:
            const sameProduct = state.cart.find(food => food.id === action.foodId);
            let newCart;
            if (sameProduct) {
                sameProduct.quantity = sameProduct.quantity + action.quantity;
                const others = cart.filter(pd => pd.id !== action.foodId);
                newCart = [...others, sameProduct];
            }
            else {
                const newObj = {
                    id: action.foodId,
                    quantity: action.quantity,
                    name:action.name,
                    img:action.img,
                    price:action.price
                }
                newCart = [...cart, newObj];
            }
            localStorage.setItem('cartFoods',JSON.stringify(newCart))
            return {
                cart: newCart
            }
        case UPDATE_QUANTITY:
            return{
                cart:state.cart.map(cartItem=>{
                    if (cartItem.id===action.foodId) {
                        cartItem.quantity=action.quantity
                    }
                    return cartItem
                })
            }
        case REMOVE_FORM_CART:
            return {
                cart: state.cart.filter(cartId => cartId !== action.foodId)
            }
        case REMOVE_ALL_FORM_CART:
            localStorage.setItem('cartFoods','[]')
            return {
                cart: []
            }

        default:
            return state
    }
}

 // const sameProduct = cart.find(cartFood => {
        //     return cartFood.Id === action.FoodId
        //     // return toString(action.foodId) === toString(cartFood.Id)
        // })
        // if (sameProduct === true) {
        //     const otherProduct = state.cart.filter(cartFood => cartFood.id !== action.foodId)
        //     sameProduct.quantity += action.quantity
        //     return {
        //         cart: [...otherProduct, sameProduct]
        //     }
        // }
        // else {
        //     return {
        //         cart: [...state.cart, { id: action.foodId, quantity: action.quantity }]
        //     }
        // }