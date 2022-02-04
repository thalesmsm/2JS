function contar(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var msg = document.querySelector('#msg')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || passo.value == 0){
        window.alert('Impossivél contar')
    } else {
        msg.innerHTML = 'Contando: '
        var ninicio = Number(inicio.value)
        var nfim = Number(fim.value)
        var npasso = Number(passo.value)
        if (ninicio < nfim) { 
            // contagem crescente
            for (var i = ninicio; i <= nfim; i+= npasso) {
                msg.innerHTML += `${i}.. `

            }
        } else {
            //contagem regressiva
            for (var i = ninicio; i >= nfim; i-= npasso) {
                msg.innerHTML += `${i}.. `
        }   }
    }
}
