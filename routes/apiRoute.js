const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const apiController = require('../controllers/apiController');


router.get('/listAll', apiController.listAll);
router.get('/listAll/:id', apiController.listOne);
router.patch('/produtos', apiController.editaProduto);
router.post('/produtos', apiController.criaProduto);
router.delete('/produtos', apiController.apagaProduto);
module.exports = router;
