let amigo = {
    nome: 'josé',
    sexo: 'M',
    peso: 80,
    engordar(p=0) {
        console.log(`engordou ${p} Kg`)
        this.peso += p
    }
}
amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)