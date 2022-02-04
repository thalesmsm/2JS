function tabuada() {
    var n1 = document.querySelector('#txtn1')
    var res = document.querySelector('#res')
    // foi digitado algum numero?
    if (n1.value.length == 0) {
        window.alert('Opa, tem algo errado aí campeão!')
        res.innerHTML = 'O número não foi digitado'
    } else {
        // gerar tabuada
        res.innerHTML = ''
        var numero1 = Number(n1.value)
        for (var i = 1; i <= 10; i++){ 
            res.innerHTML = `${numero1} x ${i} = ${numero1 * i}`   
        }
        
    }
}
