import { useMemo } from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ children, ...rest }) => {
    const saveCurrentUserInfo=useMemo(() => JSON.parse(localStorage.getItem('currentUser')), [JSON.parse(localStorage.getItem('currentUser'))])
    return (
        <Route
            {...rest}
            render={({ location }) =>
            saveCurrentUserInfo.isLogin ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}
