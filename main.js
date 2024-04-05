const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for(let i=0;i <botoes.length;j++){
    botoes [i].onclick = function(){

        for(let j=0;j<botord.length;j++){
            botord[j].classlist.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classlist.add("ativo");
        textos[i].classlist.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;