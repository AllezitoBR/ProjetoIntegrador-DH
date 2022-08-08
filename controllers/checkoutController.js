const fs = require("fs");
const usersJson = require('../users.json')
const bcrypt = require('bcrypt')

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