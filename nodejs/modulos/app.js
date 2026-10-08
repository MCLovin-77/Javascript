const saudacao = require('./meuModulo'); // Importando o módulo
const somar = require('./somar'); // Importando o módulo
const dividir = require('./dividir'); // Importando o módulo

const mensagem = saudacao('Vítor'); // Executando a função
console.log(mensagem);

const resultado = somar(5, 3); // Executando a função
console.log(resultado);

const dividir = divisão(10, 5); // Executando a função
console.log(dividir);