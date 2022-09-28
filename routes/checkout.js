var express = require('express');
var router = express.Router();
const controllerCheckout = require('../controllers/checkoutController');
const {check: checar} = require('express-validator'); // importar validator
let validarVEnda =[
    // cirar a validação para a venda
]; //array de validações

router.get('/:rota', controllerCheckout.metodo);


/*router.post('/sucessoCompra', validarVEnda, controllerCheckout.SALVARVENDA)*/

module.exports = router;
