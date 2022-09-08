window.onload = function() {
    console.log('a pagina foi carregada')
    let fieldName = document.getElementById('frmEstado');
    //focus
    fieldName.addEventListener('focus', () => {
        console.log('o campo frmEstado recebeu focus')
    })
}