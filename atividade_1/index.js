// ## Importe a biblioteca ##
let rs = require ("readline-sync")

// ## Faça o código ##

let Numvoo = rs.question ("Qual é o numero do seu voo? \n")
let fileira = rs.question ("Qual fileira deseja ficar? A B C ou D? \n")

console.log  ("O seu embarque é para o voo número:" + Numvoo)
console.log  ("E a sua fileira será:" + fileira)

