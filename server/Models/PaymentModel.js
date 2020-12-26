const mongoose = require("mongoose");

const { Schema } = mongoose;

const paymentSchema = new Schema({
    userEmail: {
        type: String,
        required: true,
    },
    cart: {
        type: Array,
        required: true,
    },
    paymentInfo: {
        type: Object,
        required: true,
    },
});

const PaymentInfo = mongoose.model("PaymentInfo", paymentSchema);

module.exports = PaymentInfo;
