const {sequelize, Produto} = require('../database/models/index');


    const apiController = {
      
    listAll: async function buscaProdutos(req, res){
             const al = await Produto.findAll();
             return res.json(al);
    }, 

    listOne: async function buscaProdutos(req, res){
      const al = await Produto.findByPk(req.params.id);
      return res.json(al);
}, 

    editaProduto: async function atualizaProdutos(req, res) {
      var { id, nome, preco, marca, qtdeEmEstoque, descricao, categoria_id } = req.body;
      const pro = await Produto.update({
        nome: nome,
        preco: preco,
        marca: marca,
        qtdeEmEstoque: qtdeEmEstoque,
        descricao: descricao,
        categoria_id: categoria_id
      },
        {
          where: { id: id }
        });
      return res.json(pro);
    },
  
    criaProduto: async function criaProdutos(req, res) {
      var { id, nome, preco, marca, qtdeEmEstoque, descricao, categoria_id } = req.body;
      const prod = await Produto.create({
            nome: nome,
            preco: preco,
            marca: marca,
            qtdeEmEstoque: qtdeEmEstoque,
            descricao: descricao,
            categoria_id: categoria_id
      });
      return res.json(prod);
    },
  
    apagaProduto: async function deletaProdutos(req, res){
      var { id } = req.body;
      const produ = await Produto.destroy(
        {  where: {id:id}
  }
      );
      return res.json(produ);
  }
  

};
    

module.exports = apiController;