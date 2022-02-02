

function verificar() {
    var agora = new Date()
    var anoAtual = agora.getFullYear()
    var idade = anoAtual - Number(document.querySelector('#txtano').value)
    var img = document.querySelector('#imagem')
    var selecaoMulher = document.querySelector('#feminino')
    
    if (selecaoMulher == 'Feminino') {
        if (idade >= 60) {
            img.src = './imagens/foto-idoso-f.png'
            document.body.style.backgroundColor = 'pink'
        } else if (idade >= 30) {
            img.src = './imagens/foto-adulto-f.png'
        } else if (idade >= 15) {
            img.src = './imagens/foto-jovem-f.png'
        } else {
            img.src = './imagens/foto-bebe-f.png'
            
        }
    } else {
        img.src ='./imagens/foto-idoso-m.png'
    }
}

