let amigo = {
    nome: 'josé',
    sexo: 'M',
    peso: 80,
    engordar(p=0) {
        console.log('engordou')
        this.peso += p
    }
}
amigo.engordar(9)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)