import axios from "axios";

const foodUrl = "https://hot-red-onion.herokuapp.com";
const orderUrl = "https://payment-gateway-2.herokuapp.com/payment";

export const fetchProducts = () => axios.get(`${foodUrl}/foodItem/all`);

export const orders = (userEmail) =>
    axios.get(`${orderUrl}/order/${userEmail}`);

export const allOrders = () => axios.get(`${orderUrl}/order/all`);
