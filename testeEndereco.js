const {sequelize, Endereco} = require('./database/models/index');


async function criaVariosEnderecos(){
    const alu = await Endereco.bulkCreate([{
        rua: 'Rua Universal',
        numero: 361,
        complemento: 'Apto 11',
        cep: 09608000,
        bairro: 'Anchieta',
        cidade: 'São Bernardo do Campo',
        estado:'SP',
        usuarios_id: 1
        
    },

    {
        rua: 'Rua Placido Afonso Rausis',
        numero: 20,
        complemento: 'casa',
        cep: 89213600,
        bairro: 'Nova Brasilia',
        cidade: 'Joinville',
        estado:'SC',
        usuarios_id: 2
    },

    {
        rua: 'Rua José Bonifácio',
        numero: 474,
        complemento: 'Apto 12',
        cep: 09721160,
        bairro: 'Centro',
        cidade: 'São Bernardo do Campo',
        estado:'SP',
        usuarios_id: 3
    }


]);
    console.log(alu);
}

criaVariosEnderecos();