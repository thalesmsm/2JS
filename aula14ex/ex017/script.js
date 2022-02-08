function tabuada() {
    var n1 = document.querySelector('#txtn')
    var res = document.querySelector('#res')
    // foi digitado algum numero?
    if (n1.value.length == 0) {
        window.alert('Opa, tem algo errado aí campeão!')
        res.innerHTML = 'O número não foi digitado'
    } else {
        // gerar tabuada

        var numero1 = Number(n1.value)
        let tabuada = document.getElementById('tabuada')
        for (var i = 1; i <= 10; i++){ 
            let item = document.createElement('option')
            item.text = `${numero1} x ${ i} = ${numero1*i}`
            tabuada.appendChild(item)
        }
        
    }
}
