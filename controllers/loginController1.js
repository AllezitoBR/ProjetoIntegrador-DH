const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const usersJson = require('../users.json');



const loginController = {

	index: (req, res) => {
		res.render('./Login/login')},

	forgetPass:	(req, res) => {
		res.render('./Login/forgetPass')},


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

    }

}

module.exports = loginController;







