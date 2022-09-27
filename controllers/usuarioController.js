const fs = require("fs");
const bcrypt = require('bcrypt');
const {sequelize, Usuario} = require('../database/models/index');

//const model = require('../models');
//const Usuario = model.Usuario;


module.exports = {
    async criarUsuario(req, res) {

        try {
            const {
                nome,
                cpf,
                email,
                senha,
                rg,
                genero,
                dataNasc,
                telefones
                
            } = req.body;

            
            
            const cryptSenha = await bcrypt.hash(senha, 8);
              
          
            
            const SalvarUsuario = await Usuario.create({
                email,
                senha: cryptSenha,
                nome,
                cpf,
                rg,
                genero,
                dataNasc,
                telefones,
                
            });
            
            return res.json({ SalvarUsuario });

        } catch (err) {
            return res.json({ msg: "Erro ao salvar Usuario " + err });
        }
    },

    async atualizaUsuario(req, res) {
        try {
          const { id } = req.params
          const { nome, login } = req.body
          const user = await Usuario.findOne({ where: { id } })
          if (!user) {
            return res.status(401).json({ message: "Nenhum usuario encontrado" })
          } else {
            const user = await Usuario.update({ nome, login }, { where: { id } })
            return res.status(200).json({ user })
          }
        } catch (error) {
          return res.status(400).json({ error })
        }
      },

    async listaUsuarios(req, res) {
        try {
          const users = await Usuario.findAll()
          if (!users) {
           return res.status(401).json({ message: 'Não existe usuario cadastros' })
          }
          return res.status(200).json({ users })
        } catch (error) {
          return res.status(400).json({ error })
        }
      },

    async deletarUsuario(req, res) {
        const { id } = req.params
        const user = await Usuario.findOne({ where: { id } })
        
        if (!user) {
         return  res.status(401).json({ message: 'Usuario não encontrado' })
        } else {
          await Usuario.destroy({ where: { id } })
          return res.status(200).json({ ok: true })
        }
      }

       
}