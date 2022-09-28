const fs = require('fs');
const path = require('path');
const {sequelize, Produto} = require('../database/models/index');

let listaRotas = [
        {'rota':'pratoFundo','metodo':'indexFundo','dir':'Prato Fundo'},
        {'rota':'pratoRaso','metodo':'indexRaso','dir':'Prato Raso'},
        {'rota':'pratoSobremesa','metodo':'indexSobremesa','dir':'Prato Sobremesa'},
        {'rota':'sousplat','metodo':'indexSousplat','dir':'Sousplat'},
        {'rota':'20Pecas','metodo':'index20Pecas','dir':'20 pecas'},
        {'rota':'30Pecas','metodo':'index30Pecas','dir':'30 pecas'},
        {'rota':'42Pecas','metodo':'index42Pecas','dir':'42 pecas'},
        {'rota':'bowls','metodo':'indexBowls','dir':'Bowls'},
        {'rota':'canecas','metodo':'indexCanecas','dir':'Canecas'},
        {'rota':'petisqueiras','metodo':'indexPetisqueiras','dir':'Petisqueiras'},
        {'rota':'pratoDeBolo','metodo':'indexPratoDeBolo','dir':'Prato de bolo'},
        {'rota':'tigelas','metodo':'indexTigelas','dir':'Tigelas'},
        {'rota':'travessas','metodo':'indexTravessas','dir':'Travessas'},
        {'rota':'xicaraDeCafe','metodo':'indexXicaraDeCafe','dir':'Xicara de cafe'},
        {'rota':'xicaraDeCha','metodo':'indexXicaraDeCha','dir':'Xicara de cha'}
    ]

    const productController = {
      
     metodo: (req, res) => {
                const rotaA = req.params.rota
                const rotaI = listaRotas.find(i => i.rota == rotaA);
                const rotaB = rotaI.dir;
                const rotaC = rotaI.rota;
                const rotaFinal = `./${rotaB}/${rotaC}`;
                
            res.render(rotaFinal)},

      listAll: async function buscaProdutos(){
        const al = await Produto.findAll();
        return res.json(a);
    }, 

      };
    

module.exports = productController;