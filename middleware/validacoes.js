

function validaCadastro(req,res,next){
    let body = req.params.body
    body('rua').notEmpty().withMessage('Rua deve ter um valor').bail(),
    body('numero').notEmpty().withMessage('Numero deve ter um valor').bail().isInt(),
    body('complemento').notEmpty().withMessage('Complemento deve ter um valor').bail(),
    body('cep').notEmpty().withMessage('Cep deve ter um valor').bail(),
    body('bairro').notEmpty().withMessage('Bairro deve ter um valor').bail(),
    body('cidade').notEmpty().withMessage('Cidade deve ter um valor').bail(),
    body('estado').notEmpty().withMessage('Estado deve ter um valor').isLength({ max: 3 }).bail()

    next()
}
module.exports = validaCadastro