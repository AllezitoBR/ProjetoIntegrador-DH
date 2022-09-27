var express = require('express');
var router = express.Router();
const controllerCheckout = require('../controllers/checkoutController');
const {body, validationResult} = require('express-validator'); // importar validator
const validaCadastro = require('../middleware/validacoes'); 
const isAuthUser = require('../middleware/isAuthUser'); 


let validarEndereco = [ 
//validar cadastro de endereço
    
    body('rua').notEmpty().withMessage('Rua deve ter um valor').bail(),
    body('numero').notEmpty().withMessage('Numero deve ter um valor').bail().isInt(),
    body('complemento').notEmpty().withMessage('Complemento deve ter um valor').bail(),
    body('cep').notEmpty().withMessage('Cep deve ter um valor').bail(),
    body('bairro').notEmpty().withMessage('Bairro deve ter um valor').bail(),
    body('cidade').notEmpty().withMessage('Cidade deve ter um valor').bail(),
    body('estado').notEmpty().withMessage('Estado deve ter um valor').isLength({ max: 3 }).bail()
];

/* router.get('/checkoutEnd/:cep', controllerCheckout.listaCep); */
//rota compra 1
router.get('/checkoutCompra/:id', controllerCheckout.checkoutCompraId);
router.get('/checkoutCompra', controllerCheckout.checkoutCompra);

router.get('/checkoutEnd/:id', controllerCheckout.checkoutEndId);
router.get('/checkoutEnd', controllerCheckout.checkoutEnd);
router.post('/checkoutEnd', validarEndereco, controllerCheckout.checkoutEndSave);
// deletar endereço
router.post('/deletarEnd/:id', controllerCheckout.deletarEnd);
router.get('/AlterarEnd/:id', controllerCheckout.AlterarEnd); // alterar endereço compra


router.get('/checkoutRetirarCompra', controllerCheckout.checkoutRetirarCompra);
/* router.get('/checkoutRes2', controllerCheckout.checkoutRes2); */

router.get('/checkoutFormaPagamento', controllerCheckout.checkoutFormaPagamento);
router.post('/checkoutFormaPagamento', controllerCheckout.FormaPagamento);

router.get('/checkoutResPrevVenda', controllerCheckout.checkoutResPrevVenda);
router.post('/checkoutResPrevVenda', controllerCheckout.checkoutPreviewFinalVenda);

router.get('/confirmarcompra', controllerCheckout.sucessoControler)
let validarVEnda =[
    // cirar a validação para a venda
]; //array de validações
router.post('/confirmarcompra', validarVEnda, controllerCheckout.salvarVenda)

module.exports = router;
