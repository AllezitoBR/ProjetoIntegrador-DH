const fs = require("fs");
const usersJson = require('../users.json')
const usersJsonComplete = require('../usersComplete.json')
const bcrypt = require('bcrypt')
const usuarioController = {

    cadastra: (req, res) => {
        const usuario = req.body
        const senhaCriptografada = bcrypt.hashSync(usuario.senha, 11)
        console.log(senhaCriptografada)
        usuario.senha = senhaCriptografada
        usersJson.push(usuario)
        fs.writeFile("users.json", JSON.stringify(usersJson, null, 4), err => {
            
            if (err) throw err;
            console.log("Done writing"); 
        });
        return res.redirect('/users/cadastro2')
    },

    cadastraMeusDados: (req, res) => {
        const usuario = req.body
        console.log(usuario)
        usersJsonComplete.push(usuario)
        fs.writeFile("usersComplete.json", JSON.stringify(usersJsonComplete, null, 4), err => {
            
            if (err) throw err;
            console.log("Done writing complete"); 
        });
        return res.redirect('/users/cadastro2')
    },



    exibirCadastro: (req, res) => {
        res.render('../views/Cadastro/cadastro3')
    },

    exibirCadastroSucesso: (req, res) => {
        res.render('../views/Cadastro/cadastro2')
    },



    auth: (req, res) => {
        const dadosUsuario = req.body
        const user = usersJson.find((u) => u.email == dadosUsuario.email)
        if (user) {
            
            let senhaValida = bcrypt.compareSync(dadosUsuario.senha, user.senha)
            if (senhaValida) {
                req.session.isAuth = dadosUsuario.email
                
                //return res.redirect('/')
            }
        }
          return res.redirect('/')

       // return res.send('Login ou senha errada')
    },

    meusDados: (req, res) => {
        res.render('./Cadastro/meusDados')
    }
}
module.exports = usuarioController