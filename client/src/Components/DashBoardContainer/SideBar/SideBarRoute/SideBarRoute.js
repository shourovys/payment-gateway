import React from "react";
import { Switch } from "react-router-dom";
import { PrivateRoute } from "../../../Authentication/PrivateRoute";
import AdminOrder from "../../AllRoute/AdminOrder/AdminOrder";
import OrderHistory from "../../AllRoute/OrderHistory/OrderHistory";

const SideBarRoute = () => {
    return (
        <Switch>
            <PrivateRoute path="/dashboard/myOrders">
                <OrderHistory />
            </PrivateRoute>
            <PrivateRoute path="/dashboard/allOrders">
                <AdminOrder />
            </PrivateRoute>
        </Switch>
    );
};

export default SideBarRoute;
