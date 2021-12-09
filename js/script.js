let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calc () {
    console.log("calculando...")
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);


    resultado.innerHTML = `<p> ${(qtdTotalCarne / 1000)} Kg de carne</p>`
    resultado.innerHTML += `<p> ${Math.ceil(qtdTotalCerveja / 355)} Latas de cerveja</p>`
    resultado.innerHTML += `<p> ${Math.ceil(qtdTotalBebida / 1000)} Litros de Refrigerante/Agua</p>`
}

function carnePP(duracao){
    let carne = 400
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    let Cerveja = 1200
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidaPP(duracao){
    let bebida = 1000
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}