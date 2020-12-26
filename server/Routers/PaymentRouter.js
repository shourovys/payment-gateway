const express = require("express");
const PaymentRouter = express.Router();
const {
    addOrder,
    capture,
    orders,
    allOrders,
} = require("../controllers/PaymentController");

PaymentRouter.post("/order", addOrder);

PaymentRouter.post("/capture/:paymentId", capture);

PaymentRouter.get("/order/all", allOrders);

PaymentRouter.get("/order/:userEmail", orders);

module.exports = PaymentRouter;
