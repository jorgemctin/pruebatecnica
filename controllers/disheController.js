const { Dishe } = require("../models");

const DisheController = {};


//CREATE Dish
disheController.createDishe = async(req, res) => {
    try {
        const { dishname,image,categoy_id } = req.body;
        //validaciones
        const newDishe = await Dishe.create(
            {
                dishname,
                image,
                categoy_id
            }
        );
        return res.json({
            success: true,
            message: "Dishe created",
            data: newDishe
        });       
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Dishe cant be created",
                error: error
            }
        )
    }
}


//UPDATE Dish
disheController.updateDishe = async(req, res) => {
    try {
        const disheId = req.params.id;
        const dishe = await Dishe.findByPk(disheId);
        if (!dishe) {
            return res.json(
                {
                    success: true,
                    message: "Dishe doesnt exists"
                }
            );
        };
        const { dishname,image,categoy_id } = req.body;
        const disheUpdated = await Dishe.update(
            {
                dishname,
                image,
                categoy_id
            },
            {
                where: {
                    id: disheId
                }
            }
        )
        return res.json(
            {
                success: true,
                message: "Dishe updated",
                data: disheUpdated
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Dishe cant be updated",
                error: error
            }
        )
    }
}


//GET ALL Dishes
disheController.getAllDishes = async(req, res) => {
    try {
        const dishe = await Dishe.findAll();
        return res.json(
            {
                success: true,
                message: "Get all dishes retrieved",
                data: dishe
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Dishe cant be retrieved",
                error: error.message
            }
        )
    }
}

module.exports = DisheController;