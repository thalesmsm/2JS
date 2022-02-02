function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos}`
    if (hora < 12){
        //bom dia
        img.src = './imagens/fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora < 18) {
        //boa tarde
        img.src = './imagens/fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //boa noite
        img.src = './imagens/fotonoite.png'
        document.body.style.background = '#515154'
    }
}