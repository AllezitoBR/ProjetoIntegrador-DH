const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const usersJson = require('../database/users.json');


const cadastroController = {
    index: (req, res) => {
		res.render('./Cadastro/cadastro3')},
	
    cadastra: (req, res) => {
        
        const usuario = req.body;
        console.log(usuario);
        
        const senhaCriptografada = bcrypt.hashSync(usuario.senha, 11);
        
        usuario.senha = senhaCriptografada;
        
        usersJson.push(usuario);
        
        fs.writeFile("users.json", JSON.stringify(usersJson, null, 4), err => {
            
            if (err) throw err;
            console.log("Done writing"); 
        });
        return res.redirect('./Cadastro/cadastro3')
    },
    exibirCadastro: (req, res) => {
        res.render('./Cadastro/cadastro3')
    },
    auth: (req, res) => {
        
        const dadosUsuario = req.body
        const user = usersJson.find((u) => u.email == dadosUsuario.email)
        
        if (user) {
            
            let senhaValida = bcrypt.compareSync(dadosUsuario.senha, user.senha)
            if (senhaValida) {
                req.session.isAuth = dadosUsuario.email
                
                return res.send('logado')
            }
        }
        return res.send('Login ou senha errada')

    },
    meusDados: (req, res) => {
        res.render('./Cadastro/meusDados')
    }

}
module.exports = cadastroController;
