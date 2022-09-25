function validaCadastroServico(req,res,next){
    const servico= req.body //{nome:"iago",valor:144}

 
    console.log(servico)
    if(servico.nome == ''  ){
    console.log("vazio")
        res.status(403).send('esqueceu o nome')
    }else{
        next()
    }
}
module.exports = validaCadastroServico