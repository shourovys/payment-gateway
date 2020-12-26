import React, { useState } from "react";
import { connect } from "react-redux";
import {
    removeAllFormCart,
    updateQuantity,
} from "../../Redux/Action/CartAction";
import Payment from "../Payment/Payment";
import OrderedFood from "./OrderedFood/OrderedFood";
import OrderedPrice from "./OrderedPrice/OrderedPrice";
import "./OrderInfo.css";

const OrderInfo = ({
    cart,
    updateQuantity,
    currentUserInfo,
    removeAllFormCart,
}) => {
    const [total, setTotal] = useState(0);

    return (
        <div className="OrderInfo">
            <p>
                Form <span>Online Food</span>
            </p>
            <p>Arriving in 20-30 min</p>
            <p>107 Rd No 8</p>
            <div className="orderFoods">
                {cart.map((cartFood) => (
                    <OrderedFood
                        cartFood={cartFood}
                        key={cartFood._id}
                        updateQuantity={updateQuantity}
                    />
                ))}
            </div>
            <OrderedPrice
                cart={cart}
                totalPrice={total}
                setTotalPrice={setTotal}
            />
            <Payment
                currentUserInfo={currentUserInfo}
                removeAllFormCart={removeAllFormCart}
                total={total}
                cart={cart}
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cartData.cart,
        currentUserInfo: state.userInfo.currentUserInfo,
    };
};

const mapDispatchToProps = { updateQuantity, removeAllFormCart };
export default connect(mapStateToProps, mapDispatchToProps)(OrderInfo);
