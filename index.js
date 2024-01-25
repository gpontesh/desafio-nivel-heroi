console.log("********** CLASSIFICAÇÃO DE NÍVEL DO HERÓI ********** \n")

let nickname = "Bertilak"
let quantidadeXP = 0
let nivelHeroi = ""

if (quantidadeXP < 0){
    console.log("A quantidade de XP não pode ser negativa.")
} else if (quantidadeXP >= 0 && quantidadeXP <= 1000){
    nivelHeroi = "Ferro"
} else if (quantidadeXP > 1000 && quantidadeXP <= 2000){
    nivelHeroi = "Bronze"
} else if (quantidadeXP > 2000 && quantidadeXP <= 5000){
    nivelHeroi = "Prata"
} else if (quantidadeXP > 5000 && quantidadeXP <= 7000){
    nivelHeroi = "Ouro"
} else if (quantidadeXP > 7000 && quantidadeXP <= 8000){
    nivelHeroi = "Platina"
} else if (quantidadeXP > 8000 && quantidadeXP <= 9000){
    nivelHeroi = "Ascendente"
} else if (quantidadeXP > 9000 && quantidadeXP <= 10000){
    nivelHeroi = "Imortal"
} else{
    nivelHeroi = "Radiante"
}

if (quantidadeXP >= 0){
    console.log("O herói de nome " + nickname + " está no nível: " + nivelHeroi)
}