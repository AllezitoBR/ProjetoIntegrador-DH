const fs = require("fs");
const usersJson = require('../users.json')
const bcrypt = require('bcrypt')

const controllerCheckout = {
    CHECKOUT1: (req, res) =>{
        res.render('./Checkout/checkout1');
    },
    CHECKOUT2: (req, res) =>{
        res.render('./Checkout/checkout2');
    },
    CHECKOUT2TIPOFRETE: (req, res) =>{
        //fazer o redirect
        //let venda = req.body;
        res.redirect('/checkoutres2')
    },
    CHECKOUT3: (req, res) =>{
        res.render('./Checkout/checkout3');
    },
    CHECKOUT4: (req, res) =>{
        res.render('./Checkout/checkout4');
    },
    CHECKOUTRES: (req, res) =>{
        res.render('./Checkout/checkoutRes');
    },
    CHECKOUTRES2: (req, res) =>{
        res.render('./Checkout/checkoutRes2');
    },
    SUCESSOCONTROLER: (req, res) =>{
        res.render('./Checkout/sucessoCheckout');
    },
    SALVARVENDA: (req, res) =>{
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