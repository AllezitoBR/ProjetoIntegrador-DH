// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const cadastroController = require('../controllers/cadastroController');

// ************ Middleware Require ************
const loggedUserMiddleware = require('../middlewares/loggedUserMiddleware');
//const loggedUserDataMiddleware = require('../middlewares/loggedUserDataMiddleware');


router.post('/cadastro', cadastroController.cadastra); 
router.get('/cadastro', cadastroController.index); 
router.get('cadastro/meusdados', cadastroController.meusDados)
//router.get('/logout', cadastroController.logout);



module.exports = router;