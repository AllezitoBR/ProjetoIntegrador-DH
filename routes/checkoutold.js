var express = require('express');
var router = express.Router();
const controllerCheckout = require('../controllers/checkoutController');

router.get('/checkout1', controllerCheckout.CHECKOUT1);
router.get('/checkout2', controllerCheckout.CHECKOUT2);
router.get('/checkout3', controllerCheckout.CHECKOUT3);
router.get('/checkout4', controllerCheckout.CHECKOUT4);
router.get('/checkoutRes', controllerCheckout.CHECKOUTRES);


module.exports = router;