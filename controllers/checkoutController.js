const {sequelize, Endereco} = require('../database/models/index')
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
    checkoutEnd: (req, res) =>{
        Endereco.findAll({ raw: true, order: [['id', 'DESC']] }).then(ends => {
            res.render('./Checkout/checkoutEnd', { ends: ends })
          })
    /*     res.render('./Checkout/checkoutEnd'); */
    },
    checkoutEndSave: (req, res) =>{
        const {rua, numero, complemento, cep, bairro, cidade, estado} = req.body
        if (rua != '') {
        Endereco.create({
            rua: rua,
            numero: numero, 
            complemento: complemento,
            cep:cep,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            usuarios_id: 1
        }).then(() => {res.redirect('/checkoutEnd')}).catch((error) => res.send(error))
    } else {
        console.log('Digite o nome da rua')
    }
    },



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