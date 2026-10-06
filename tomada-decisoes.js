const prompt = require("prompt-sync")();

let nome = prompt("Nome do Jogador: ");
let pontuacao = Number(prompt("Pontuação: "));
let pontuacaoMinima = 1000;

console.log("Analisando perfil...");

if (isNaN(pontuacao)) {
  console.log(
    "ERRO GRAVE: Você não digitou um número válido. Cadastro cancelado.",
  );
} else if (pontuacao >= pontuacaoMinima) {
  console.log("APROVADO!!! " + nome + " tem nível para a equipe principal.");
} else {
  let pontoFaltantes = pontuacaoMinima - pontuacao;
  console.log(
    "REPROVADO!!! Faltam " + pontoFaltantes + " pontos para entrar no time.",
  );
}
