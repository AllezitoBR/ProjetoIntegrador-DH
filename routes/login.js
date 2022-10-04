// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const loginController = require('../controllers/loginController');

// ************ Middleware Require ************
const loggedUserMiddleware = require('../middlewares/loggedUserMiddleware');
//const loggedUserDataMiddleware = require('../middlewares/loggedUserDataMiddleware');

router.get('/sucesso', (req, res) => {res.render('./Cadastro/cadastro4')},);
router.get('/', (req, res) => {res.render('./Cadastro/cadastro3')},); 
router.post('/', loginController.login); 
router.get('/login/Sucesso', loginController.loginSuccess)
router.get('/login/Fracasso', loginController.loginFailure);
//router.get('/forget', loginController.forgetPass);
//router.get('/logout', loginController.logout);



module.exports = router;