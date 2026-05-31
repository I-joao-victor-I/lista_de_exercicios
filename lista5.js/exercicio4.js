const prompt = require('prompt-sync')();

var senha;

do {
    senha = prompt("Digite a senha: ");
} while (senha !== "1234");

console.log("Acesso permitido!");