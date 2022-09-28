const {sequelize, Imagem} = require('./database/models/index');



async function buscaImagens(){
    const al = await Imagem.findAll();
    console.log(al.map(a=>a.toJSON()));
}


async function criaVariasImagens(){
    const alu = await Imagem.bulkCreate([{
        url:'../images/42 pecas/1.PNG',
        produto_id: 194
        
    },
       
    {
        url:'../images/42 pecas/2.PNG',
        produto_id: 195
    },

    {
        url:'../images/42 pecas/3.PNG',
        produto_id: 196
    },

    {
        url:'../images/42 pecas/4.PNG',
        produto_id: 197
        
    },
       
    {
        url:'../images/42 pecas/5.PNG',
        produto_id: 198
    },

    {
        url:'../images/42 pecas/6.PNG',
        produto_id: 199
    },

    {
        url:'../images/42 pecas/7.PNG',
        produto_id: 200
        
    },
       
    {
        url:'../images/42 pecas/8.PNG',
        produto_id: 201
    },

    {
        url:'../images/42 pecas/9.PNG',
        produto_id: 202
    },

    {
        url:'../images/42 pecas/10.PNG',
        produto_id: 203
        
    },
       
    /*{
        url:'../images/42 pecas/11.PNG',
        produto_id: 192
    },

    {
        url:'../images/42 pecas/12.PNG',
        produto_id: 193
    },

    {
        url:'../images/PratoSobremesas/13.PNG',
        produto_id: 62
        
    },
       
    {
        url:'../images/PratoSobremesas/14.PNG',
        produto_id: 63
    },

    {
        url:'../images/PratoSobremesas/15.PNG',
        produto_id: 64
    },

    {
        url:'../images/PratoSobremesas/16.PNG',
        produto_id: 65
        
    },
       
    {
        url:'../images/PratoSobremesas/17.PNG',
        produto_id: 66
    },

    {
        url:'../images/PratoSobremesas/18.PNG',
        produto_id: 67
    },

    {
        url:'../images/PratoSobremesas/19.PNG',
        produto_id: 68
        
    },
       
    {
        url:'../images/PratoSobremesas/20.PNG',
        produto_id: 69
    },

    {
        url:'../images/PratoSobremesas/21.PNG',
        produto_id: 70
    },

    {
        url:'../images/PratoSobremesas/22.PNG',
        produto_id: 71
        
    },
       
    {
        url:'../images/PratoSobremesas/23.PNG',
        produto_id: 72
    },

    {
        url:'../images/PratoSobremesas/24.PNG',
        produto_id: 73
    }*/




]);
    console.log(alu);
}


//buscaImagens();
criaVariasImagens();