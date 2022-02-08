let num = document.getElementById('fnum');
let lista = document.getElementById('flista');
let res = document.getElementById('res');
let valores = [];

function isNumero (n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista (n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert('Valor já adicionado ou inválido!')
    }
    num.value = ''  //para limpar o input e voltar o cursor pra lá
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione um valor antes de finalizar!')
    } else {
        let totalNumerosAdicionados = valores.length
        let maior = valores.sort(function(a,b){return b-a})
        let maiorNumero = maior[0]
        let menor = valores.sort(function(a,b){return a-b})
        let menorNumero = menor[0]
        let soma = 0
        let media = 0
        for (let i in valores){
            soma += valores[i]
        }
        media = soma / totalNumerosAdicionados
        res.innerHTML = ''
        res.innerHTML += `<p>Foram adicionados ${totalNumerosAdicionados} números.</p>`
        res.innerHTML += `<p>O maior número é o ${maiorNumero}</p>`
        res.innerHTML += `<p>O menor número é o ${menorNumero}</p>`
        res.innerHTML += `<p>A soma dos números é igual a ${soma}</p>`
        res.innerHTML += `<p>A média dos números adicionados é igual a ${media.toFixed(2)}</p>`
    }   
}