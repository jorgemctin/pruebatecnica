const { Order, Dishe } = require('../models');
const orderController = {};

orderController.createOrder = async (req, res) => {
    try {
        const newOrder = await Order.create({
            user_id,
            dish_id,
            fecha,
            timer
        });
        return res.json({
            success: true,
            message: "Order created",
            data: newOrder
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: "Order could not be created",
            error: error.message
        });
    }
};


//GET ALL SERVICE/TREATMENT
orderControllerController.getAllOrders = async(req, res) => {
    try {
        const order = await Order.findAll();
        return res.json(
            {
                success: true,
                message: "Get all orders retrieved",
                data: order
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Order cant be retrieved",
                error: error.message
            }
        )
    }
}
module.exports = orderController;