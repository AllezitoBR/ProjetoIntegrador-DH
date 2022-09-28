const path = require('path');
const {check}=require('express-validator');

module.exports = [
    check('usuario')
    .notEmpty().withMessage('Por favor, escreva o nome do seu usuário').bail().trim(),
    check('senha')
    .notEmpty().withMessage('Por favor, digite sua senha').bail().isLength({min:8}).withMessage('A senha precisa ter pelo menos 8 caracteres').bail()
];