const fs = require('fs');
const path = require('path');

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
        console.log(rotaI);
                let rotaB = rotaI.dir
                let rotaC = rotaI.rota
        console.log(rotaB);
                var cacete = `./${rotaB}/${rotaC}`;
                
            res.render(cacete)},
      };
    



/*const productController = {
	indexFundo: (req, res) => {
		res.render('./Prato Fundo/pratoFundo')},

        indexRaso: (req, res) => {
                res.render('./Prato Raso/produto')},

        indexSobremesa: (req, res) => {
                res.render('./Prato Sobremesa/pratosobremesa')},

        indexSousplat: (req, res) => {
                res.render('./Sousplat/sousplat')},

        index20Pecas: (req, res) => {
                res.render('./20 pecas/20Pecas')},

        index30Pecas: (req, res) => {
                res.render('./30 pecas/30Pecas')},

        index42Pecas: (req, res) => {
                res.render('./42 pecas/42Pecas')},

        indexBowls: (req, res) => {
                res.render('./Bowls/bowls')},

        indexCanecas: (req, res) => {
                res.render('./Canecas/canecas')},

        indexPetisqueiras: (req, res) => {
                res.render('./Petisqueiras/petisqueiras')},

        indexPratoDeBolo: (req, res) => {
                res.render('./Prato de bolo/pratoDeBolo')},

        indexTigelas: (req, res) => {
                res.render('./Tigelas/tigelas')},

        indexTravessas: (req, res) => {
                res.render('./Travessas/travessas')},

        indexXicaraDeCafe: (req, res) => {
                res.render('./Xicara de cafe/xicaraDeCafe')},

        indexXicaraDeCha: (req, res) => {
                res.render('./Xicara de cha/xicaraDeCha')}
    
        
    };*/

   
    
    



module.exports = productController;