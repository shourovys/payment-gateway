import * as api from "../../Api";

export const ADD_ORDERS = "ADD_ORDERS";
export const ADD_CURRENT_ORDERS = "ADD_CURRENT_ORDERS";
export const ADD_PRIVIES_ORDERS = "ADD_PRIVIES_ORDERS";
export const ADD_ALL_ORDERS = "ADD_ALL_ORDERS";
export const ADD_ALL_PRIVIES_ORDERS = "ADD_ALL_PRIVIES_ORDERS";
export const UPDATE_ORDER_STATUS = "UPDATE_ORDER_STATUS";

export const fetchOrders = (userEmail) => async (dispatch) => {
    const { data } = await api.orders(userEmail);
    console.log(
        "🚀 ~ file: OrderAction.js ~ line 12 ~ fetchCurrentOrders ~ data",
        data
    );

    dispatch({ type: ADD_ORDERS, payload: data });
};

export const fetchAllOrders = () => async (dispatch) => {
    const { data } = await api.allOrders();
    console.log(
        "🚀 ~ file: OrderAction.js ~ line 27 ~ fetchAllOrders ~ data",
        data
    );

    dispatch({ type: ADD_ALL_ORDERS, payload: data });
};
