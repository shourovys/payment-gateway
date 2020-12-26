import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AssignmentTurnedInSharpIcon from "@material-ui/icons/AssignmentTurnedInSharp";
import MenuIcon from "@material-ui/icons/Menu";
import RestoreTwoToneIcon from "@material-ui/icons/RestoreTwoTone";
import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import SideBarRoute from "./SideBarRoute/SideBarRoute";
import { useStyles } from "./SideBarStyle";

function SideBar(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const history = useHistory();
    const currentUser = useSelector((state) => state.userInfo.currentUserInfo);
    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            {currentUser.isLogin && (
                <List
                    onClick={() => {
                        setMobileOpen(false);
                    }}
                >
                    <ListItem
                        button
                        key={"Order History"}
                        onClick={() => history.push("/dashboard/myOrders")}
                    >
                        <ListItemIcon>
                            <RestoreTwoToneIcon />
                        </ListItemIcon>
                        <ListItemText primary={"My Orders"} />
                    </ListItem>
                    <ListItem
                        button
                        key={"Orders"}
                        onClick={() => history.push("/dashboard/allOrders")}
                    >
                        <ListItemIcon>
                            <AssignmentTurnedInSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary={"All Orders"} />
                    </ListItem>
                </List>
            )}
            <Divider />
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        <div
                            onClick={() => history.push("/")}
                            style={{ cursor: "pointer" }}
                        >
                            Online Food
                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === "rtl" ? "right" : "left"}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <SideBarRoute />
            </main>
        </div>
    );
}

SideBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default SideBar;
