import firebase from "firebase/app";
import "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import userSvg from "../../Images/user.svg";
import { errorNF, successNF } from "../../Redux/Action/notificationsAction";
import { addCurrentUser } from "../../Redux/Action/UserInfoAction";
import { firebaseConfig } from "./Firebase.config.js";

firebase.initializeApp(firebaseConfig);

const authContext = createContext();

const AuthContext = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // setUser(user)
            } else {
                localStorage.setItem("currentUser", JSON.stringify({}));
            }
        });
    }, []);

    // common functions
    const setUser = (user, setName) => {
        if (user) {
            const userInfo = {
                isLogin: true,
                name: user.displayName || setName,
                email: user.email,
                photo: user.photoURL || userSvg,
            };
            setCurrentUser(userInfo);
            props.addCurrentUser(userInfo);

            localStorage.setItem("currentUser", JSON.stringify(userInfo));
            dispatch(
                successNF(`${user.displayName || setName} welcome to your holl`)
            );
            let { from } = location.state || { from: { pathname: "/" } };
            history.replace(from);
        } else {
            setCurrentUser({});
            props.addCurrentUser({});
            localStorage.setItem("currentUser", JSON.stringify({}));
        }
    };

    const showError = (data) => dispatch(errorNF(data));

    const updateUserName = (name) => {
        const user = firebase.auth().currentUser;
        user.updateProfile({ displayName: name })
            .then(() => console.log("name update"))
            .catch(() => console.log("name not update"));
    };

    const sineUpWithEmail = (name, email, password) => {
        console.log(name, email, password);
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                setUser(res.user, name);
                updateUserName(name);
            })
            .catch((error) => {
                showError(error.message);
                console.log(error);
            });
    };
    const logInWithEmail = (email, password) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
                setUser(res.user);
            })
            .catch((error) => {
                showError(error.message);
                console.log(error);
            });
    };
    const logOut = () => {
        firebase
            .auth()
            .signOut()
            .then(function () {
                dispatch(errorNF("You are successfully Log Out"));
                setUser();
                history.replace("/");
            })
            .catch((error) => {
                showError(error.message);
            });
    };

    return (
        <authContext.Provider
            value={{ sineUpWithEmail, logInWithEmail, logOut, currentUser }}
        >
            {props.children}
        </authContext.Provider>
    );
};

const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = {
    addCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContext);
export const useAuth = () => useContext(authContext);
