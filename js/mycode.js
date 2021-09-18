var numeroSecreto = parseInt(Math.random() * 11);
var tentativasRestantes = 5;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou, parabéns!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Por favor, digite um número de 0 a 10.";
  } else {
    tentativasRestantes--;
    if (chute > numeroSecreto) {
      elementoResultado.innerHTML =
        "Você errou, o número é menor do que " +
        chute +
        ", você ainda tem " +
        tentativasRestantes +
        " tentativa(s).";
    } else {
      elementoResultado.innerHTML =
        "Você errou, o número é maior do que " +
        chute +
        ", você ainda tem " +
        tentativasRestantes +
        " tentativa(s).";
    }
  }
  if (tentativasRestantes <= 0) {
    elementoResultado.innerHTML =
      "Você perdeu o jogo, o número era " +
      numeroSecreto;
  }
}

function Resetar() {
  numeroSecreto = parseInt(Math.random() * 11);
  tentativasRestantes = 5;
  botao = document.getElementById("chutar");
  elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML = "";
}
