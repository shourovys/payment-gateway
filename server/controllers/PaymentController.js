const request = require("request");
const PaymentInfo = require("../Models/PaymentModel");
const keys = require("../keys");
const Razorpay = require("razorpay");

const PaymentController = {};

const razorInstance = new Razorpay({
    key_id: keys.razorIdKey,
    key_secret: keys.razorIdSecret,
});

PaymentController.addOrder = (req, res) => {
    try {
        razorInstance.orders.create(req.body, async function (err, order) {
            if (err) {
                return res.status(500).json({
                    message: "Something wrong!",
                });
            }
            return res.status(200).json(order);
        });
    } catch (err) {
        return res.status(500).json({
            message: "Something wrong!",
        });
    }
};

PaymentController.capture = (req, res) => {
    try {
        return request(
            {
                method: "POST",
                url: `https://${keys.razorIdKey}:${keys.razorIdSecret}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
                form: req.body.paymentInfo,
            },
            async function (err, response, body) {
                if (err) {
                    return res.status(500).json({
                        message: "Something error!s",
                    });
                }
                const payment = new PaymentInfo({
                    ...req.body,
                    paymentInfo: JSON.parse(body),
                });
                payment
                    .save()
                    .then((result) => console.log(result))
                    .catch((err) => console.log(err));
                return res.status(200).json(body);
            }
        );
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};

PaymentController.orders = async (req, res) => {
    const { userEmail } = req.params;
    try {
        const data = await PaymentInfo.find({ userEmail });
        res.send(data);
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Something wrong!",
        });
    }
};

PaymentController.allOrders = async (req, res) => {
    try {
        const data = await PaymentInfo.find({});
        res.send(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something wrong!",
        });
    }
};

module.exports = PaymentController;
