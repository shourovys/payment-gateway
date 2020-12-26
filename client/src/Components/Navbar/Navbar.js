import AppBar from "@material-ui/core/AppBar";
import { fade, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import "./NavBar.css";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: "sticky",
        top: 0,
        zIndex: 1,
        [theme.breakpoints.up("sm")]: {
            position: "static",
        },
    },
    title: {
        cursor: "pointer",
        flexGrow: 1,
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
        fontWeight: 750,
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

export default function Navbar() {
    const classes = useStyles();
    const userInfo = useSelector((state) => state.userInfo.currentUserInfo);
    const history = useHistory();
    const location = useLocation();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <div
                            onClick={() => history.push("/")}
                            style={{ cursor: "pointer" }}
                        >
                            Online Food
                        </div>
                    </Typography>
                    <div className="nav-info">
                        {location.pathname !== "/dashboard" && (
                            <div
                                onClick={() =>
                                    history.push("/dashboard/myOrders")
                                }
                            >
                                <h3 style={{ cursor: "pointer" }}>
                                    Order history &nbsp;
                                </h3>
                            </div>
                        )}

                        {location.pathname !== "/login" && (
                            <div onClick={() => history.push("/login")}>
                                {userInfo.isLogin ? (
                                    <button className="btn">Logout</button>
                                ) : (
                                    <button className="btn">Login</button>
                                )}
                            </div>
                        )}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
