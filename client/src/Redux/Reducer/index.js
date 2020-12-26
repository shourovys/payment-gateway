import { combineReducers } from "redux";
import { cartReducer } from "./CartReducer";
import { foodDataReducer } from "./FoodsDataReducer";
import notificationsReducer from "./notificationsReducer";
import orderReducer from "./OrderReducer";
import { userInfoReducer } from "./UserInfoReducer";

export const rootReducer = combineReducers({
    userInfo: userInfoReducer,
    notifications: notificationsReducer,
    foodsData: foodDataReducer,
    cartData: cartReducer,
    ordersData: orderReducer,
});
