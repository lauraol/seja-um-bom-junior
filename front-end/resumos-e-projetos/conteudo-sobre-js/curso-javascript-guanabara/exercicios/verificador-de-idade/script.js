function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('p#res');
    var resFoto = document.getElementById('minha-imagem');

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('ERRO - Por favor, verifique os dados e tente novamente!');
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';

        // criação de elemento com o js
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        img.classList.add('fotinhos')

        if(fsex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', './assets/crianca-menino.jpg');
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', './assets/jovem-homem.jpg');
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', './assets/adulto-homem.jpg');
            }else{
                //idoso
                img.setAttribute('src', './assets/idoso-homem.jpg');
            }
        }else if(fsex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', './assets/crianca-menina.jpg');
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', './assets/jovem-mulher.jpg');
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', './assets/adulta-mulher.jpg');
            }else{
                //idoso
                img.setAttribute('src', './assets/idosa-mulher.jpg');
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

        //adicionando o elemento ao html
        resFoto.appendChild(img);
    }

}