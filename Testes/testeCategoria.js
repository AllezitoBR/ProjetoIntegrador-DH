const {sequelize, Categoria} = require('./database/models/index');


async function buscaCategorias(){
    const al = await Categoria.findAll();
    console.log(al.map(a=>a.toJSON()));
}

async function buscaCategoriasProdutos(){
    const al = await Produto.findAll();
    console.log(al.map(a=>a.toJSON()));
}

async function criaVariasCategorias(){
    const alu = await Categoria.bulkCreate([{
        descricao: 'Sousplat',
        departamento_id:1
    },

    {
       descricao: 'Xicara de cha',
       departamento_id:2
    },

    {
      descricao: 'Xicara de cafe',
      departamento_id:2
    }


]);
    console.log(alu);
}


//buscaCategorias();
//buscaCategoriasProdutos;
//criaVariasCategorias();