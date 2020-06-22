// ## Importe a biblioteca ##

let rs = require ("readline-sync")                     

// ## Faça o código ##

let mes = parseInt (rs.question ("Diga o mês\n"))
let dia = parseInt (rs.question ("Diga a dia\n"))

if (mes == 1) {
   if (dia <= 20 ) {
       console.log = ("Capricornio")    
}
   else { 
       console.log = ("Aquario")
   }
}
else if (mes == 2) {
     if (dia <= 18) {
       console.log = ("Aquario")
     }
     else {
       console.log = ("Peixes")
     }
}
else if (mes == 3) {
     if (dia <= 20) {
         console.log = ("Peixes")
     }
     else {
         console.log = ("Aries")
     }
}
else if (mes == 4) {
    if (dia <= 20) {
      console.log = ("Aries")
    }
    else {
      console.log = ("Touro")
    }
}
else if (mes == 5) {
    if (dia <= 20) {
        console.log = ("Touro")
    }
    else {
        console.log = ("Gêmeos")
    }
}
else if (mes == 6) {
        if (dia <= 20) {
          console.log = ("Gêmeos")
        }
        else {
          console.log = ("Câncer")
    }
}
else if (mes == 7) {
        if (dia <= 22) {
            console.log = ("Câncer")
        }
        else {
            console.log = ("Leão")
        }
   }
else if (mes == 8) {
       if (dia <= 22) {
         console.log = ("Leão")
       }
       else {
         console.log = ("Virgem")
       }
}
else if (mes == 9) {
       if (dia <= 22) {
           console.log = ("Virgem")
       }
       else {
           console.log = ("Libra")
       }
}
else if (mes == 10) {
        if (dia <= 22) {
          console.log = ("Libra")
        }
        else {
          console.log = ("Escorpião")
        }
    }
else if (mes == 11) {
        if (dia <= 21) {
            console.log = ("Escorpião")
        }
        else {
            console.log = ("Sagitário")
        }
   }
   else if (mes == 12) {
       if (dia <= 20) {
         console.log = ("Sagitário")
       }
       else {
         console.log = ("Capricornio")
       }
    }
