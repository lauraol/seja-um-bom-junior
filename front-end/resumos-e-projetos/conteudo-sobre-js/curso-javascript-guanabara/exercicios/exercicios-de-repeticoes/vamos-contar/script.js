function contar() {
    let inicio = document.getElementById('txtinicio');
    let fim = document.getElementById('txtfim');
    let passo = document.getElementById('txtpasso');
    let res = document.getElementById('res');

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar';
        //window.alert('Erro - Faltam dados!');
    }else{
        res.innerHTML = 'Contando: <br>'
        let inicioNum = Number(inicio.value);
        let fimNum = Number(fim.value);
        let passoNum = Number(passo.value);

        if(passoNum <= 0){
            window.alert('Passo inválido. Então, vamos considerar passo com valor 1');
            passoNum = 1;
        }

        if(inicioNum < fimNum){
            //contagem crescente
            for(let contador = inicioNum; contador <= fimNum; contador += passoNum){
                res.innerHTML += `${contador} 👉`;
            }
            
        }else{
            //contagem regressiva
            for(let contador = inicioNum; contador >= fimNum; contador -= passoNum){
                res.innerHTML += `${contador} 👉`;
            }
        }
    }
    res.innerHTML += '🥰';
}