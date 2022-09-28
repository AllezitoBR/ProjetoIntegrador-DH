const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productController = require('../controllers/productController');

router.get('/:rota', productController.metodo);


module.exports = router;


