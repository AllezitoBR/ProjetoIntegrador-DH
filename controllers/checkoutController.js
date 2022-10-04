const axios = require('axios')
const {sequelize, Endereco, Compra, Usuario, endereco_usuario} = require('../database/models/index')
//const {sequelize, Compra} = require('../database/models/index')
const fs = require("fs");
const usersJson = require('../users.json')
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');



/* const EnderecoModels = require("../database/models/Endereco"); */

const controllerCheckout = {
  
    checkoutCarrinhoId: (req, res) =>{
        res.render('./Checkout/checkoutCarrinho');
    },
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
   
 /*    listaCep: (req, res) =>{
        const cep = req.params.cep
        axios({
            method: "get",
            url: `https://brasilapi.com.br/api/cep/v2/${cep}`}).then(function (response) {
            res.json(response.data)
          }); 

        res.render('./Checkout/checkoutRes');
    }, */

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
            req.session.compraSalva = compra;
            Usuario.findByPk(compra.usuarios_id).then( userCompra =>{  
                req.session.compraUsuario = compra.usuarios_id; 
                        
                if (userCompra) {
                    
                    req.session.userCompraSession = userCompra;
                    Endereco.findByPk(compra.endereco_id).then( endrCompra =>{ 
                           
                    if (endrCompra){
                        req.session.endrCompraSession = endrCompra;
                        return res.render('./checkout/checkoutCompra', {compra: compra, userCompra: userCompra, endrCompra: endrCompra})                       
                    }else{res.send('Endereço não encontrado')}                                          
                    })
                }else{res.send('Usuário não encontrado')}                                         
            })
        }else{res.send('Compra não encontrada')}  
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
        req.session.usuarioCompra = id;
        Endereco.findAll({ 
            where: {usuarios_id: users.id},
            order: [['id', 'DESC']] 
        }).then(ends => {
           //
           Compra.findAll(  { raw: true, where: {usuarios_id: id},
            order: [['id', 'DESC']] 
        }).then( compraDoUsuario =>{
            return res.render('./Checkout/checkoutEnd', {users: users, ends: ends, compraDoUsuario: compraDoUsuario, CompraSalva: req.session.compraSalva }) //mandando todos os endereços mas nao eh isso que quero 
            })
           //
        })   
    }else{
        res.send('Usuário não encontrado')
    }
    })
    },
    checkoutEndSave: (req, res) =>{
        const {rua, numero, complemento, cep, bairro, cidade, estado, usuarios_id} = req.body

/*         if (rua == '') erros.push('Precisa digitar a rua')
        if (estado.lengt > '2') erros.push('Estado maior que 2') */
        const errors = validationResult(req);
        console.log(errors)
        if (errors.isEmpty()) {
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
            res.redirect('/checkout/checkoutEnd/'+usuarios_id)}).catch((error) => res.send(errors))
    } else {
         /*  res.redirect('checkoutEnd/'+usuarios_id, {errors: errors.mapped(), old: req.body}); */
        res.redirect('/checkout/checkoutEnd/'+usuarios_id);
    }
    },
    deletarEnd: (req, res) => {
        const {usuarios_id} = req.body
        Endereco.destroy( {where: {id: req.params.id}} ).then( () => {
            res.redirect('/checkoutEnd/'+1)  
        }).catch((error) => res.send(error))
    },

    AlterarEnd:(req, res) => {
        let  idEnd  = req.params;
        let { id } =req.session.compraSalva
        console.log(req.params.id )
        console.log(id)
        
        Compra.update( {endereco_id: req.params.id }, {where: {id: id}} ).then( () => {
            res.redirect('/checkout/checkoutCompra/'+id)  
        }).catch((error) => res.send(error))
    },

/* ******************* FINAL CONTROLERS ENDEREÇO *************************** */


/* ******************* FORMA DE PAGAMEENTO *************************** */
    checkoutFormaPagamento: (req, res) =>{
        console.log(req.session.compraSalva)
        res.render('./Checkout/checkoutFormaPagamento', {CompraSalva: req.session.compraSalva, 
            UserCompraSessao: req.session.userCompraSession,
            EndrCompraSessao: req.session.endrCompraSession  });
    },
/* ******************* FINAL FORMA DE PAGAMEENTO *************************** */
checkoutPreviewFinalVenda: (req, res) =>{
        //fazer o redirect
        //let venda = req.body;
        console.log(req.session.userCompraSession)
   /*      res.render('./Checkout/sucessoCheckout'); */
       /*  res.render('./Checkout/checkoutFormaPagamento', {CompraSalva: req.session.compraSalva });  */
       res.render('./Checkout/checkoutResPrevVenda', {CompraSalva: req.session.compraSalva,
            UserCompraSessao: req.session.userCompraSession,
            EndrCompraSessao: req.session.endrCompraSession  });
    },

/* ******************* FINAL checkoutresPrevVenda *************************** */
    checkoutResPrevVenda: (req, res) =>{
        let { id } =req.session.compraSalva
        console.log(req.params.id )
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