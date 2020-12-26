import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../../../Redux/Action/OrderAction";
import DataTable from "../../DataTable/DataTable";

const OrderHistory = () => {
    const dispatch = useDispatch();
    const userEmail = useSelector(
        (state) => state.userInfo.currentUserInfo.email
    );
    const orders = useSelector((state) => state.ordersData.orders);

    useEffect(() => {
        dispatch(
            fetchOrders(JSON.parse(localStorage.getItem("currentUser")).email)
        );
    }, [dispatch, userEmail]);

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>My orders</h1>
            <DataTable orderData={orders} />
        </div>
    );
};

export default OrderHistory;
