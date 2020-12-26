import Axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";

const Payment = ({ currentUserInfo, removeAllFormCart, total, cart }) => {
    const totalPrice = Math.round(total * 100);
    const history = useHistory();
    const resetOrderData = () => {
        removeAllFormCart();
        history.replace("/dashboard/myOrders");
    };

    async function razorPayPaymentHandler() {
        const API_URL = `https://payment-gateway-2.herokuapp.com/payment/`;
        const orderUrl = `${API_URL}order`;
        const response = await Axios.post(orderUrl, {
            amount: totalPrice,
            currency: "INR",
            receipt: "receipt#1",
            payment_capture: 0,
        });
        const { data } = response;
        console.log(
            "🚀 ~ file: Payment.js ~ line 24 ~ razorPayPaymentHandler ~ data",
            data
        );

        const options = {
            key: "",
            name: "Online Food",
            description: "your data is save",
            order_id: data.id,
            handler: async (response) => {
                try {
                    const paymentId = response.razorpay_payment_id;
                    const url = `${API_URL}capture/${paymentId}`;
                    const captureResponse = await Axios.post(url, {
                        userEmail: currentUserInfo.email,
                        cart,
                        paymentInfo: {
                            amount: totalPrice,
                            currency: "INR",
                        },
                    });
                    const successObj = JSON.parse(captureResponse.data);
                    console.log(
                        "🚀 ~ file: Payment.js ~ line 44 ~ handler: ~ successObj",
                        successObj
                    );
                    const captured = successObj.captured;

                    if (captured) {
                        console.log(
                            "order successfully added in database with payment"
                        );
                        resetOrderData();
                    }
                } catch (err) {
                    console.log(err);
                }
            },
            theme: {
                color: "#686CFD",
            },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    }

    return (
        <div>
            <button
                onClick={razorPayPaymentHandler}
                className="squareBtn active"
            >
                Pay Now
            </button>
        </div>
    );
};

export default Payment;
