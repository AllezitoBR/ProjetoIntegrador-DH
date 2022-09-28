const fs = require("fs");
const usersJson = require('../users.json')
const bcrypt = require('bcrypt')

let listaRotasCheckout = [
    {'rota':'checkout1','metodo':'checkout1'},
    {'rota':'checkout2','metodo':'checkout2'},
    {'rota':'checkout2F','metodo':'formaPagamento'},
    {'rota':'checkout3','metodo':'checkout3'},
    {'rota':'checkout4','metodo':'checkout4'},
    {'rota':'checkout4P','metodo':'PreviewFinalVenda'},
    {'rota':'checkoutRes','metodo':'checkoutRes'},
    {'rota':'checkoutRes2','metodo':'checkoutRes2'},
    {'rota':'checkoutResPrevVenda','metodo':'checkoutResPrevVenda'},
    {'rota':'sucessoCompra','metodo':'sucessoCompra'}
    
]


const controllerCheckout = {
      
    metodo: (req, res) => {
              const rotaA = req.params.rota
              const rotaI = listaRotasCheckout.find(i => i.rota == rotaA);
              const rotaB = rotaI.rota
              const rotaFinal = `./Checkout/${rotaB}`;
              
          res.render(rotaFinal)},
    };

    module.exports = controllerCheckout;


/*const controllerCheckout = {
    CHECKOUT1: (req, res) =>{
        res.render('./Checkout/checkout1');
    },
    CHECKOUT2: (req, res) =>{
        res.render('./Checkout/checkout2');
    },
    CHECKOUT2TIPOFRETE: (req, res) =>{
        //fazer o redirect
        //let venda = req.body;
        res.redirect('../views/checkoutres2')
    },
    FormaPagamento: (req, res) =>{
        //fazer o redirect
        //let venda = req.body;
        res.redirect('./Checkout/checkoutres2')
    },
    PreviewFinalVenda: (req, res) =>{
        //fazer o redirect
        //let venda = req.body;
        res.redirect('./Checkout/checkoutresPrevVenda')
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
    CHECKOUTRESPREVVENDA: (req, res) =>{
        res.render('./Checkout/checkoutResPrevVenda');
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
 

}*/

