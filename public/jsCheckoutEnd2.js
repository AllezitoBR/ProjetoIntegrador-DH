console.log('teste');
const formCadastro = document.getElementById('formCadastro')

formCadastro.addEventListener('submit', function(event){
    console.log('cliquei')
    error = []
    const estado = document.getElementById('estado')
       alert('')

    const email = document.getElementById('email')
    if (email.value.lenght > 3){
        error.push('dasdsa')
    }else{
        error.push('ssss')
    }
    console.log(error)
    event.preventDefault()
})