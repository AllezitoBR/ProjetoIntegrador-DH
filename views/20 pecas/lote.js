const {sequelize, Produto} = require('./database/models/index');

async function buscaProdutosSpec(){
  const produto = await Produto.findAll({ where: { categoria_id: 1 } });
  if (produto === null) {
    console.log('Not found!');
  } else {
    console.log(produto.map(a=>a.toJSON())); 
  }
buscaProdutosSpec();

async function buscaImagensSpec(){
    const img = await Imagem.findAll({ where: { produto_id: 1 } });
    console.log(img.map(a=>a.toJSON()));
}
buscaImagensSpec();


let conteudo = '';
for (let i = 0; i < produto.length; i++) {
    
    conteudo = conteudo + `
    <div class="product-images">
    <img class="product-image" src="<%img.url%>">
    <h2 class="product-image-title">COLEÇÃO LA TAVOLA</h2>
    <p class="product-image-descript"><%produto.name%></p>
    <span class="product-image-price"><%produto.preco%></span>
    </div> `
}
document.getElementById("product-images-1").innerHTML = conteudo;
}







