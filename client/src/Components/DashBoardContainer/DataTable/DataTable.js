import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import PropTypes from "prop-types";
import React from "react";

const useRowStyles = makeStyles({
    root: {
        "& > *": {
            borderBottom: "unset",
        },
    },
});

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell align="left">{row._id}</TableCell>
                <TableCell align="center">{row.cart.length}</TableCell>
                <TableCell align="center">
                    {String(row.paymentInfo.amount).slice(0, -2)}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography
                                variant="h6"
                                gutterBottom
                                component="div"
                            >
                                Payment Deities
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>order_id</TableCell>
                                        <TableCell align="center">
                                            Bank
                                        </TableCell>
                                        <TableCell align="center">
                                            status
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            {row.paymentInfo.order_id}
                                        </TableCell>
                                        <TableCell align="center">
                                            {row.paymentInfo.bank}
                                        </TableCell>
                                        <TableCell align="center">
                                            {row.paymentInfo.status}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                        <Box margin={1}>
                            <Typography
                                variant="h6"
                                gutterBottom
                                component="div"
                            >
                                Deities
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Food</TableCell>
                                        <TableCell align="center">
                                            Quantity
                                        </TableCell>
                                        <TableCell align="center">
                                            Item price (₹)
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.cart.map((cartItem) => (
                                        <TableRow key={cartItem._id}>
                                            <TableCell
                                                component="th"
                                                scope="row"
                                            >
                                                {cartItem.name}
                                            </TableCell>
                                            <TableCell align="center">
                                                {cartItem.quantity}
                                            </TableCell>
                                            <TableCell align="center">
                                                ₹ {cartItem.price}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            })
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};

export default function DataTable({ controller, orderData }) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell align="left">Order Id </TableCell>
                        <TableCell align="center">Food Item</TableCell>
                        <TableCell align="center">Total Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orderData &&
                        orderData.map((row) => (
                            <Row
                                key={row._id}
                                row={row}
                                controller={controller}
                            />
                        ))}
                </TableBody>
            </Table>
            {!orderData.length > 0 && (
                <h3 style={{ textAlign: "center", margin: "2rem 0rem" }}>
                    You have no Order records
                </h3>
            )}
        </TableContainer>
    );
}
