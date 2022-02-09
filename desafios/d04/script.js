let btn = document.getElementById('butao');
butao.addEventListener('click', clicar)

function clicar() {
    let produto = window.prompt('Qual produto deseja comprar?')
    let valor = Number.parseFloat(window.prompt(`Qual o valor do ${produto}?`))
    let valorPago = Number.parseFloat(window.prompt(`Qual valor você deu para pagar o ${produto}`))
    let troco = valorPago - valor
    window.alert(`
    Você comprou ${produto} que custou R$ ${valor.toFixed(2).replace('.', ',')}
    Deu R$ ${valorPago.toFixed(2).replace('.', ',')} e vai resceber R$ ${troco.toFixed(2).replace('.', ',')} de troco.
    `)
}