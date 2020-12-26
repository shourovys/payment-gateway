import {
    ADD_ALL_ORDERS,
    ADD_ALL_PRIVIES_ORDERS,
    ADD_ORDERS,
    ADD_PRIVIES_ORDERS,
} from "../Action/OrderAction";

const ordersData = {
    orders: [],
    priviesOrders: [],
    adminOrders: [],
    allPriviesOrders: [],
};

const orderReducer = (state = ordersData, action) => {
    switch (action.type) {
        case ADD_ORDERS:
            return {
                ...state,
                orders: action.payload,
            };

        case ADD_PRIVIES_ORDERS:
            return {
                ...state,
                priviesOrders: action.payload,
            };

        case ADD_ALL_ORDERS:
            return {
                ...state,
                adminOrders: action.payload,
            };

        case ADD_ALL_PRIVIES_ORDERS:
            return {
                ...state,
                allPriviesOrders: action.payload,
            };

        default:
            return state;
    }
};
export default orderReducer;
