import { useEffect } from "react";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Authentication from "./Components/Authentication/Authentication";
import AuthContext from "./Components/Authentication/AuthFunctions";
import { PrivateRoute } from "./Components/Authentication/PrivateRoute";
import DashBoard from "./Components/DashBoardContainer/DashBoard/DashBoard";
import FoodItemContainer from "./Components/FoodItemContainer/FoodItemContainer";
import Navbar from "./Components/Navbar/Navbar";
import OrderInfo from "./Components/OrderInfo/OrderInfo";
import { fetchAllProduct } from "./Redux/Action/FoodsDataAction";
import { addCurrentUser } from "./Redux/Action/UserInfoAction";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllProduct());
        dispatch(
            addCurrentUser(JSON.parse(localStorage.getItem("currentUser")))
        );
    }, [dispatch]);

    return (
        <>
            <AuthContext>
                <NotificationContainer />
                <Navbar />
                <Switch>
                    <Route path="/home">
                        <FoodItemContainer />
                    </Route>
                    <Route path="/login">
                        <Authentication />
                    </Route>
                    <PrivateRoute path="/order">
                        <OrderInfo />
                    </PrivateRoute>
                    <PrivateRoute path="/dashboard">
                        <DashBoard />
                    </PrivateRoute>
                    <Route exact path="/">
                        <FoodItemContainer />
                    </Route>
                </Switch>
            </AuthContext>
        </>
    );
}

export default App;
