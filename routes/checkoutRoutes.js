var express = require('express');
var router = express.Router();
const controllerCheckout = require('../controllers/checkoutController');
const {check: checar} = require('express-validator'); // importar validator
let validarVEnda =[
    // cirar a validação para a venda
]; //array de validações

//router.get('/checkout1', controllerCheckout.CHECKOUT1);
//router.get('/checkout2', controllerCheckout.CHECKOUT2);
router.post('/checkout2', controllerCheckout.FormaPagamento);
//router.get('/checkout3', controllerCheckout.CHECKOUT3);
//router.get('/checkout4', controllerCheckout.CHECKOUT4);
router.get('/checkoutRes', controllerCheckout.checkoutRes);
router.get('/checkoutUdpEndereco', controllerCheckout.checkoutUdpEndereco);
router.get('/checkoutEnd', controllerCheckout.checkoutEnd);
router.post('/checkoutEnd', controllerCheckout.checkoutEndSave);


router.get('/checkoutRetirarCompra', controllerCheckout.checkoutRetirarCompra);
router.get('/checkoutRes2', controllerCheckout.checkoutRes2);

router.get('/checkoutFormaPagamento', controllerCheckout.checkoutFormaPagamento);
router.post('/checkoutFormaPagamento', controllerCheckout.FormaPagamento);

router.get('/checkoutResPrevVenda', controllerCheckout.checkoutResPrevVenda);


router.post('/checkout4', controllerCheckout.PreviewFinalVenda);

router.get('/confirmarcompra', controllerCheckout.sucessoControler)
router.post('/confirmarcompra', validarVEnda, controllerCheckout.salvarVenda)

module.exports = router;