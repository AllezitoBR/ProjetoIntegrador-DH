var express = require('express');
var router = express.Router();
const controllerCheckout = require('../controllers/checkoutController');
const {check: checar} = require('express-validator'); // importar validator
let validarVEnda =[
    // cirar a validação para a venda
]; //array de validações

router.get('/checkout1', controllerCheckout.CHECKOUT1);
router.get('/checkout2', controllerCheckout.CHECKOUT2);
router.post('/checkout2', controllerCheckout.FormaPagamento);
router.get('/checkout3', controllerCheckout.CHECKOUT3);
router.get('/checkout4', controllerCheckout.CHECKOUT4);
router.get('/checkoutRes', controllerCheckout.CHECKOUTRES);
router.get('/checkoutRes2', controllerCheckout.CHECKOUTRES2);
router.get('/checkoutResPrevVenda', controllerCheckout.CHECKOUTRESPREVVENDA);


router.post('/checkout4', controllerCheckout.PreviewFinalVenda);

router.get('/confirmarcompra', controllerCheckout.SUCESSOCONTROLER)
router.post('/confirmarcompra', validarVEnda, controllerCheckout.SALVARVENDA)

module.exports = router;
