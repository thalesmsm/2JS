function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var fAno = document.getElementById('txtano') //formulario que pega o ano de nascimento
    
    var res = document.querySelector('#res')
    if (fAno.value.length == 0 || fAno.value > anoAtual) { //verificar se o input de ano de nascimento esta vazio ou ano maior que atual
        window.alert('Digite o ano de nascimento válido')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img') // para colocar foto dinamicamente pelo JS devemos criar um elemento a partir do document.createElement('img') o img será a 'tag'
        img.setAttribute('id', 'foto') // daí cria-se um atributo onde é dado um id foto para a tag img criada 
        // essas ultimas 2 linhas de código representam <img id="foto> escrito em HTML"
        if (fsex[0].checked) {
            genero = 'homem'
            document.body.style.backgroundColor = 'blue'
            if (idade < 10) {
                //crianca
                img.src = './imagens/foto-bebe-m.png'
            } else if (idade < 23) {
                // jovem
                img.setAttribute('src', './imagens/foto-jovem-m.png')
            }else if (idade < 50) {
                //adulto
                img.src = './imagens/foto-adulto-m.png'
            } else {
                //idoso
                img.setAttribute('src', './imagens/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            document.body.style.backgroundColor = 'pink'
            if (idade < 10) {
                //crianca
                img.setAttribute('src', './imagens/foto-bebe-f.png')
            } else if (idade < 23) {
                // jovem
                img.setAttribute('src', './imagens/foto-jovem-f.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', './imagens/foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', './imagens/foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) // (imagino que)como não tem uma tag e imagem no conteúdo da pag vindo do HTML, usa o apppendChild para adicionar a imagem ao document através do JS. não apenas trocando o conteudo atraves do JS
        
    }
             
}

