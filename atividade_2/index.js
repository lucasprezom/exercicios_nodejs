// ## Importe a biblioteca ##

let rs = require ("readline-sync")

// ## Faça o código ##

let masc = rs.question ("Você está usando mascara ao sair de casa? Responda Sim ou Não \n")
let maos = rs.question ("Você lava suas maos frequentemente? Responda Sim ou Não \n")

if (masc == "Sim" && maos == "Sim") {
    console.log ("Você está de parabens!")
} else {
    console.log ("Vacilando! Se cuida *****")
} 
