var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioController')

//router.get('/cadastro2',usuarioController.exibirCadastroSucesso)
//router.get('/cadastro',usuarioController.exibirCadastro)
//router.post('/cadastro',usuarioController.cadastra)
//router.post('/login', usuarioController.auth)
router.get('/meusdados', (req, res) => {res.render('./Cadastro/meusDados')})
router.post('/meusdados', usuarioController.criarUsuario)
router.get('/sucesso', (req, res) => {res.render('./Cadastro/cadastro2')},);
module.exports = router