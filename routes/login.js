// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const loginController = require('../controllers/loginController');

// ************ Middleware Require ************
const loggedUserMiddleware = require('../middlewares/loggedUserMiddleware');
//const loggedUserDataMiddleware = require('../middlewares/loggedUserDataMiddleware');


router.get('/', loginController.index); 
router.post('/', loginController.auth); 
router.get('/forget', loginController.forgetPass);
//router.get('/logout', loginController.logout);



module.exports = router;