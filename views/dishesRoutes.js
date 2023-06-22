const authController = require('../controllers/authController');
const disheController = require('../controllers/disheController');
const isAdmin = require('../middlewares/isAdmin.js');
const auth = require('../middlewares/verifyToken');
const router = require('express').Router();
//ROUTES
router.post('/create', auth, isAdmin, disheController.createDishe)
router.put('/update/:id', auth, isAdmin, disheController.updateDishe)
router.delete('/delete/:id', auth, isAdmin, disheController.deleteDishe)
router.get('/getAll', disheController.getAllDishes)

module.exports = router;