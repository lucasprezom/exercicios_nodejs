// ## Importe a biblioteca ##
let rs = require ("readline-sync")
// ## Faça o código ##

let quadrado = rs.questionFloat ("Qual é o tamanho de um dos lados do seu quadrado?\n")

let resp = quadrado * 4
{ console.log ("O tamanho do seu quadrado é: " + resp)
}

