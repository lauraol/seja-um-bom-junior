function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var saudacao = window.document.getElementById('saudacao')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos}`

    if(hora >= 0 && hora < 12){
        saudacao.innerHTML = "Bom dia!"
        img.src = './assets/icone-manha.jpg'
        document.body.style.background = '#59ABF0'
    }else if(hora >= 12 && hora < 18){
        saudacao.innerHTML = "Boa tarde!"
        img.src = './assets/icone-tarde.jpg'
        document.body.style.background = '#FCAE84'
    }else{
        saudacao.innerHTML = "Boa noite!"
        img.src = './assets/icone-noite.jpg'
        document.body.style.background = '#09344A'
    }
}
