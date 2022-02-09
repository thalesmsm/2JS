function clicar() {
    let num = window.prompt('Digite um número')
    let numero = Number.parseInt(num)
    let antes = numero - 1
    let depois = numero + 1
    window.alert(`Antes do número ${numero} temos o ${antes} e depois temos o ${depois}`)
}
