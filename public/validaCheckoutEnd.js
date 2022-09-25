 console.log('validaCheckoutEnd.js');
 let campoRua = document.getElementById('rua');
 let campoNumero = document.getElementById('numero');
 let campoComplemento = document.getElementById('complemento');
 let campoCep = document.getElementById('cep');
 let campoBairro = document.getElementById('bairro');
 let campoCidade = document.getElementById('cidade');
 let campoEstado = document.getElementById('estado');
//focus
/* campoRua.addEventListener('focus', () => {
    console.log('campo nome recebeu foco');
})
//blur
campoRua.addEventListener('blur', () => {
    console.log('campo nome saiu do foco');
}) */
//change
campoRua.addEventListener('change', () => {
    console.log('campo nome teve valor alterado');
    campoRua.style.color = 'green';
})
campoNumero.addEventListener('change', () => {
    console.log('campo campoNumero teve valor alterado');
    campoNumero.style.color = 'green';
})
campoComplemento.addEventListener('change', () => {
    console.log('campo campoNumero teve valor alterado');
    campoComplemento.style.color = 'green';
})
campoCep.addEventListener('change', () => {
    console.log('campo campoCep teve valor alterado');
    campoCep.style.color = 'green'
})
campoBairro.addEventListener('change', () => {
    console.log('campo campoBairro teve valor alterado');
    campoBairro.style.color = 'green'
})
campoCidade.addEventListener('change', () => {
    console.log('campo campoCidade teve valor alterado');
    campoCidade.style.color = 'green'
})
campoEstado.addEventListener('change', () => {
    console.log('campo campoEstado teve valor alterado');
    campoEstado.style.color = 'green'
})

/* 
if (erros) {
    erros.pop();
    if(i > 0 ){
        i--;
    }
    console.log("Array Removido: "+erros);
  } */
// validar o formulario campo vazio
let formCadastroEnd = document.getElementById('formCadastroEnd')

formCadastroEnd.addEventListener('submit', function(event){
    let erros = [];

    if (campoRua.value == "")  {
        erros.push('O campo Rua não pode estar vazio!');
    }
    if (campoNumero.value == "") {
        erros.push('O campo Numero não pode estar vazio!');
    }
    if (campoComplemento.value == "") {
        erros.push('O campo Complemento não pode estar vazio!');
    }
    if (campoCep.value == "") {
        erros.push('O campo Cep não pode estar vazio!');
    }
    if (campoBairro.value == "") {
        erros.push('O campo Bairro não pode estar vazio!');
    }
    if (campoCidade.value == "") {
        erros.push('O campo Cidade não pode estar vazio!');
    }
    if (campoEstado.value == "") {
        erros.push('O campo Estado não pode estar vazio!');
    }
    if (campoEstado.value.length >2) {
        erros.push('O campo Estado ver ter 2 digitos exemplo BA');
    }
    if (erros.length > 0) {
        console.log(erros)
        event.preventDefault();
    }
    let ulErros = document.getElementById('ulerrors');
    for (let i = 0; i < erros.length; i++){
        ulErros.innerHTML += "<li>"+erros[i]+"</li>"
    }

});



/* const formCadastroEnd = document.getElementById('formCadastroEnd')
formCadastroEnd.addEventListener('submit', function(event){
    console.log('cliquei')
    error = []
    const estado = document.getElementById('estado')
    if (estado.value.lenght > 2){
        event.preventDefault()
        console.log('Valor do campo estado incorreto')
        alert('Valor do campo estado incorreto')
    }
})   */