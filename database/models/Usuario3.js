'use strict';
const {Model} = require('sequelize');

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    class Usuario extends Model {

        static associate(models) {

        }
    };
    Usuario.init({
        email:DataTypes.STRING,
        senha_hash: DataTypes.VIRTUAL,
        senha:DataTypes.STRING,
        nome:DataTypes.STRING,
        cpf:DataTypes.INTEGER,
        rg:DataTypes.INTEGER,
        genero:DataTypes.STRING,
        dataNasc:DataTypes.DATE,
        telefones:DataTypes.STRING
               
    }, {
        sequelize,
        modelName: 'Usuario',
        
    });

    Usuario.addHook('beforeSave', async cryptSenha => {
        if (cryptSenha.senha_hash) {
            cryptSenha.senha = await bcrypt.hash(cryptSenha.senha_hash, 8);
        }
    });

    return Usuario;

};