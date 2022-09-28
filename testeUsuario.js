const {sequelize, Usuario} = require('./database/models/index');

async function criaVariosUsuarios(){
    const alu = await Usuario.bulkCreate([{
        email: 'adilson.fernando@gmail.com',
        senha: '123456',
        nome: 'Adilson Fernando dos Santos',
        cpf: 6940604880,
        rg: 141997308,
        sexo: 'M',
        dataNascimento:'13/04/1965',
        telefones:'11 939363218  47 991937089'
        
    },

    {
        email: 'marcio.simetria@gmail.com',
        senha: '123456',
        nome: 'Marcio Pereira dos Santos',
        cpf: 6940604880,
        rg: 141997308,
        sexo: 'M',
        dataNascimento:'30/11/1967',
        telefones:'11 939363218  47 991937089'
    },

    {
        email: 'vkms18@gmail.com',
        senha: '123456',
        nome: 'VictorKenzo Miyazaki dos Santos',
        cpf: 6940604880,
        rg: 141997308,
        sexo: 'M',
        dataNascimento:'07/02/2002',
        telefones:'11 939363218  47 991937089'
    }


]);
    console.log(alu);
}


async function buscaUsuarios(){
    const al = await Usuario.findAll();
    console.log(al.map(a=>a.toJSON()));
}

async function buscaUsuario(){
    const al = await Usuario.findByPk(1,{include:['usuario_endereco']})
    console.log(al.toJSON())
}

/*buscaUsuarios();*/
buscaUsuario();
//criaVariosUsuarios();