const prompt = require("prompt-sync")();
var soma = 0;
var quantidade = 0;

let nota = Number(prompt("Digite uma nota (-1 para encerrar):"));

while (nota !== -1) {

    soma += nota;
    quantidade++;

    nota = Number(prompt("Digite uma nota (-1 para encerrar):"));
}

let media = soma / quantidade;

console.log("Média: " + media);