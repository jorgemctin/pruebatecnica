const authController = require('../controllers/authController');
const orderController = require('../controllers/orderController');
const isAdmin = require('../middlewares/isAdmin.js');
const auth = require('../middlewares/verifyToken');
const router = require('express').Router();

//ROUTES
router.post('/create', auth, orderController.createOrder)
router.get('/getAll',  auth, isAdmin, orderController.getAllOrders)

module.exports = router;