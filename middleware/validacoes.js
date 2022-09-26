function validaCadastroServico(req,res,next){
    const servico= req.body 

 
    console.log(servico)
    if(servico.nome == ''  ){
    console.log("vazio")
        res.status(403).send('esqueceu o nome')
    }else{
        next()
    }
}
module.exports = validaCadastroServico