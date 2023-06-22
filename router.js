const router = require('express').Router();

const authRoutes = require('./views/authRoutes');
const disheRoutes = require('./views/disheRoutes');
const orderRoutes = require('./views/orderRoutes');

router.use('/auth', authRoutes);
router.use('/dishe', disheRoutes);
router.use('/order', orderRoutes);


module.exports = router;
