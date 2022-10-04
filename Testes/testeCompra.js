const {sequelize, Compra} = require('./database/models/index');


async function criaVariasCompras(){
    const alu = await Compra.bulkCreate([{
        total: 1234.80,
        data: '20/06/2022',
        pago: 1,
        enderecoEntrega: 'Rua Universal 361 apto11 Anchieta São Bernardo do Campo SP',
        usuarios_id: 1
        
    },

    {
        total: 3001.90,
        data: '20/08/2021',
        pago: 1,
        enderecoEntrega: 'Rua Universal 361 apto11 Anchieta São Bernardo do Campo SP',
        usuarios_id: 1
    },

    {
        total: 638.40,
        data: '01/02/2019',
        pago: 0,
        enderecoEntrega: 'Rua Universal 361 apto11 Anchieta São Bernardo do Campo SP',
        usuarios_id: 2
    }


]);
    console.log(alu);
}

async function buscaCompras(){
    const al = await Compra.findAll();
    console.log(al.map(a=>a.toJSON()));
}


async function buscaCompraProduto(){
    const al = await Compra.findByPk(1,{include:['compra_produto']});
    console.log(al.toJSON());
}


//buscaCompras();
buscaCompraProduto();
//criaVariasCompras();