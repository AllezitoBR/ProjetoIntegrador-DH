const {sequelize, Endereco, Compra, Usuario, endereco_usuario} = require('../database/models/index')
//const {sequelize, Compra} = require('../database/models/index')
const fs = require("fs");
const usersJson = require('../users.json')
const bcrypt = require('bcrypt');


/* const EnderecoModels = require("../database/models/Endereco"); */

const controllerCheckout = {

    checkoutRetirarCompra: (req, res) =>{
        //fazer o redirect
        //let venda = req.body;
        res.render('./Checkout/checkoutRetirarCompra');
    },
    FormaPagamento: (req, res) =>{
        //fazer o redirect
        //let venda = req.body;
        res.redirect('/checkoutFormaPagamento')
    },
    PreviewFinalVenda: (req, res) =>{
        //fazer o redirect
        //let venda = req.body;
        res.redirect('/checkoutresPrevVenda')
    },

    checkoutRes: (req, res) =>{
        res.render('./Checkout/checkoutRes');
    },

    checkoutUdpEndereco: (req, res) =>{
        res.render('./Checkout/checkoutUdpEndereco');
    },

    checkoutUdpEnderecoId: (req, res) =>{ // teste pode apagar
        const {id} = req.params
        res.send(id)
       // res.render('./Checkout/checkoutUdpEndereco');
    },

    /* ******************* CONTROLERS DA COMPRA *************************** */
    checkoutCompra: (req, res) =>{
        res.render('./Checkout/checkoutCompra');
    },

    checkoutCompraId: (req, res) =>{ // abrir compra de um usuarioId
        const {id} = req.params
        Compra.findByPk(id).then(compra =>{
            if (compra) {
                Usuario.findByPk(compra.usuarios_id).then( userCompra =>{                    
                
                Endereco.findByPk(compra.endereco_id).then( endrCompra =>{                   
              
                return res.render('./checkout/checkoutCompra', {compra: compra, userCompra: userCompra, endrCompra: endrCompra})                       
            })})
            }

        })
       // res.render('./Checkout/checkoutUdpEndereco');
    },
/* ******************* FINAL CONTROLERS DA COMPRA *************************** */

/* ******************* CONTROLERS ENDEREÇO *************************** */
    checkoutEnd: (req, res) =>{
        Endereco.findAll({ raw: true, order: [['id', 'DESC']] }).then(ends => {
            res.render('./Checkout/checkoutEnd', { ends: ends }) //mandando todos os endereços mas nao eh isso que quero
          })
    /*     res.render('./Checkout/checkoutEnd'); */
    },
    checkoutEndId: (req, res) =>{
    const { id } = req.params
    Usuario.findByPk(id).then(users => {
    if (users) {
        Endereco.findAll({ 
            where: {usuarios_id: users.id},
            order: [['id', 'DESC']] 
        }).then(ends => {
           return res.render('./Checkout/checkoutEnd', {users: users, ends: ends }) //mandando todos os endereços mas nao eh isso que quero
        })   
    }else{
        res.send('Usuário não encontrado')
    }
    })
    },
    checkoutEndSave: (req, res) =>{
        const {rua, numero, complemento, cep, bairro, cidade, estado, usuarios_id} = req.body
        erros = []
/*         if (rua == '') erros.push('Precisa digitar a rua')
        if (estado.lengt > '2') erros.push('Estado maior que 2') */
        if (erros == '') {
        Endereco.create({
            rua: rua,
            numero: numero, 
            complemento: complemento,
            cep:cep,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            usuarios_id:usuarios_id
        }).then(() => {
            res.redirect('/checkoutEnd/'+usuarios_id)}).catch((error) => res.send(error))
    } else {
        console.log('Dadas invalidos no cadastro do endereço: ' + erros )
    }
    },
    deletarEnd: (req, res) => {
        const {usuarios_id} = req.body
        Endereco.destroy( {where: {id: req.params.id}} ).then( () => {
            res.redirect('/checkoutEnd/'+1)
        }).catch((error) => res.send(error))
    },
/* ******************* FINAL CONTROLERS ENDEREÇO *************************** */
    checkoutRes2: (req, res) =>{
        res.render('./Checkout/checkoutRes2');
    },
    checkoutFormaPagamento: (req, res) =>{
        res.render('./Checkout/checkoutFormaPagamento');
    },
    checkoutResPrevVenda: (req, res) =>{
        res.render('./Checkout/checkoutResPrevVenda');
    },
    sucessoControler: (req, res) =>{
        res.render('./Checkout/sucessoCheckout');
    },
    salvarVenda: (req, res) =>{
        //fazer o redirect
        //let venda = req.body;
        console.log('teste venda');
        const index = (req, res) => {
            //Escreva seu código aqui
            res.cookie('compraprato', 'teste', {maxAge: 100000} )
        }
        console.log(req.cookies.compraprato);
        res.redirect('/confirmarcompra')
    },
}
module.exports = controllerCheckout;