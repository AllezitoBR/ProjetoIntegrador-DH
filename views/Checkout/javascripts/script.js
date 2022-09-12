const formCadastro = document.getElementById('formCadastro')

formCadastro.addEventListener('submit', function(event){
    console.log('clquei')
    error = []
    const FrmEstado = document.getElementById('FrmEstado')
    if (FrmEstado.value.lenght > 2){
        error.push('Valor invalido para o campo Estado')
    }else{
        error.push('OK')
    }
    console.log(error)
    event.preventDefault()
})

const teste  = 'teste'
     alert(teste); 