const {sequelize, Produto} = require('./database/models/index');


async function criaVariosProdutos(){
    const alu = await Produto.bulkCreate([{
        nome: 'APARELHO DE JANTAR 42 PEÇAS COUP FOLIAGE',
        preco: 1110.86,
        marca: 'Porto Brasil Cerâmica',
        qtdeEmEstoque: 20,
        descricao: 'Moro num país tropical. Sim, o Brasil é um país de uma beleza exuberante. Nós somos apaixonados por ele e nosso nome é a maior prova disso. A beleza da nossa terra inspirou a criação da linha Foliage.',
        categoria_id: 15
        
    },

    {
        nome: 'APARELHO DE JANTAR 42 PEÇAS COUP PINEAPPLE GREEN',
        preco:  1110.86,
        marca: 'Porto Brasil Cerâmica',
        qtdeEmEstoque: 15,
        descricao: 'Há quem diga que um abacaxi é sinônimo de problema. A Porto Brasil acredita no contrário: o abacaxi é sinônimo de hospitalidade. E existe coisa mais acolhedora que estar com que amamos? Linha Pineapple. Viva o momento.',
        categoria_id: 15 
    },

    {
        nome: 'APARELHO DE JANTAR 42 PEÇAS COUP PINEAPPLE NATURAL',
        preco: 1110.86,
        marca: 'Porto Brasil Cerâmica',
        qtdeEmEstoque: 30,
        descricao: 'Há quem diga que um abacaxi é sinônimo de problema. A Porto Brasil acredita no contrário: o abacaxi é sinônimo de hospitalidade. E existe coisa mais acolhedora que estar com que amamos? Linha Pineapple. Viva o momento.',
        categoria_id: 15
    },

    {
        nome: 'APARELHO DE JANTAR 42 PEÇAS WINDSOR',
        preco: 1017.06,
        marca: 'Porto Brasil Cerâmica',
        qtdeEmEstoque: 10,
        descricao: 'A Porto Brasil buscou inspiração no passado medieval para criar a linha Windsor. Com sua pintura desgastada e rústica, a linha Windsor transmite os ares da antiga monarquia, quando reis e rainhas viviam em castelos como o de Windsor que eram rústicos e transmitiam a sensação de força e proteção. Deixe a realeza fazer parte de sua mesa.',
        categoria_id: 15
        
    },

    {
        nome: 'APARELHO DE JANTAR 42 PEÇAS MADELEINE BRANCO',
        preco:  1017.06,
        marca: 'Porto Brasil Cerâmica',
        qtdeEmEstoque: 30,
        descricao: 'O tempo passa rápido. Ficamos presos à rotina e à falta de tempo. Bordar é uma arte que exalta o contrário: a lentidão e a paciência. É um trabalho que deixa marcas. O tempo e o esforço do artesão ficam impressos para sempre. A magia de deixar uma marca para o amanhã é inspiradora e foi o motivo de criarmos a linha Madeleine.',
        categoria_id: 15
    },

    {
        nome: 'APARELHO DE JANTAR 42 PEÇAS ACANTHUS BRANCO',
        preco: 1060.72,
        marca: 'Porto Brasil Cerâmica',
        qtdeEmEstoque: 35,
        descricao: 'Acanthus é o nome de uma folha muito utilizada pelos antigos arquitetos gregos como ornamentos de colunas e templos chamado capitel. Esses ornamentos foram e ainda são muito utilizados. Contudo, esse ícone se iniciou no período clássico na antiguidade na Grécia. A Porto Brasil criou mais uma linha que traz toda classe desse período.',
        categoria_id: 15
    },

    {
        nome: 'APARELHO DE JANTAR 42 PEÇAS ROMA BRANCO',
        preco: 1089.02,
        marca: 'Porto Brasil Cerâmica',
        qtdeEmEstoque: 27,
        descricao: 'Essa linha tem como tema principal os relevos das colunas romanas, trazendo uma simetria agradável em suas formas. A linha Roma agrada desde o primeiro olhar e deixará sua mesa com um toque clássico no dia a dia.',
        categoria_id: 15
        
    },

    {
        nome: 'APARELHO DE JANTAR 42 PEÇAS ATENAS BRANCO',
        preco: 1133.36,
        marca: 'Porto Brasil Cerâmica',
        qtdeEmEstoque: 30,
        descricao: 'A Porto Brasil se inspirou nos ornamentos gregos para criação desta linha. Com uma borda suave, a linha Atenas transformará com perfeição a sua mesa tornando-a ainda mais bela.',
        categoria_id: 15
    },

    {
        nome: 'APARELHO DE JANTAR 42 PEÇAS MÔNACO BRANCO',
        preco: 1055.99,
        marca: 'Porto Brasil Cerâmica',
        qtdeEmEstoque: 20,
        descricao: 'Mônaco é uma das atrações turísticas mais luxuosas do mundo. Pequena em tamanho, mas enorme em cultura e história, essas terras ao Sul da França representam o quão extraordinárias podem ser as pequenas nações. A linha Mônaco reforça a ideia do quão extraordinária pode ficar a sua mesa usando peças elementares.',
        categoria_id: 15
    },

    {
        nome: 'APARELHO DE JANTAR 42 PEÇAS COUP BRANCO',
        preco: 1196.52,
        marca: 'Porto Brasil Cerâmica',
        qtdeEmEstoque: 25,
        descricao: 'A linha Coup é aquela linha que não pode faltar na mesa daqueles que não abrem mão do clássico. Com seu design simples e arrojado, as peças da linha Coup deixam sua mesa leve e suave.',
        categoria_id: 15
        
    },

    /*{
        nome: 'APARELHO DE JANTAR 30 PEÇAS ROMA BRANCO',
        preco: 867.56 ,
        marca: 'Porto Brasil Cerâmica',
        qtdeEmEstoque: 20,
        descricao: 'Essa linha tem como tema principal os relevos das colunas romanas, trazendo uma simetria agradável em suas formas. A linha Roma agrada desde o primeiro olhar e deixará sua mesa com um toque clássico no dia a dia.',
        categoria_id: 15
    },

    {
        nome: 'APARELHO DE JANTAR 30 PEÇAS ATENAS BRANCO',
        preco: 884.56,
        marca: 'Porto Brasil Cerâmica',
        qtdeEmEstoque: 30,
        descricao: 'A Porto Brasil se inspirou nos ornamentos gregos para criação desta linha. Com uma borda suave, a linha Atenas transformará com perfeição a sua mesa tornando-a ainda mais bela.',
        categoria_id: 15
    }*/




]);
    console.log(alu);
}





async function buscaProdutos(){
    const al = await Produto.findAll();
    console.log(al.map(a=>a.toJSON()));
}


async function buscaProdutosCompra(){
    const al = await Produto.findByPk(1,{include:['produto_compra']});
    console.log(al.toJSON());
}

async function criaVariasCompras(){
    const alu = await Compra.bulkCreate([{
        total: 1435.38,
        data: 2022-06-01,
        pago: 1,
        enderecoEntrega: 'Rua Universal 361 apto11 Anchieta São Bernardo do Campo SP', 
        usuarios_id: 1
    },
    {
        total: 3000.99,
        data: 2020-07-01,
        pago: 1,
        enderecoEntrega: 'Rua Placido Afonso Rausis 20 casa Nova Brasilia Joinville SC', 
        usuarios_id: 2
    }

]);
console.log(alu);
}



//buscaProdutos();

//buscaProdutosCompra();

criaVariosProdutos();
