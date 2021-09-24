// letra a)
const minhaString : string = "Germana"; 
//const minhaString : string = 5 /// dá erro pois não é possível atribuir um valor (Number) a uma string.


// letra b)
// const meuNumero : number = 7 // aceita apenas Number
const meuNumero : number | string = "7" // com essa sintaxe aceita number e strings

//letra c)
// const examplePerson : {nome: string, idade: number, corFavorita: string} = {
//     nome: "Aline",
//     idade: 33,
//     corFavorita: "Roxo"
// }

// // segunda parte da letra C
// type person = {
//     name: string,
//     idade: number,
//     corFavorita: string
// }

// const firstPerson : person = {
//     name: "Aline",
//     idade: 33,
//     corFavorita: "Roxo"
// }

// const secondPerson : person = {
//     name: "Germana",
//     idade: 38,
//     corFavorita: "Cinza"
// }

// const thirdPerson : person = {
//     name: "PampaCat",
//     idade: 3,
//     corFavorita: "Preto"
// }

// letra d)

enum rainbowColors {
    VIOLETA = "Violeta",
    ANIL = "Anil",
    AZUL = "Azul",
    VERDE = "Verde",
    AMARELO = "Amarelo",
    LARANJA = "Laranja",
    VERMELHO = "Vermelho"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: rainbowColors
}

const firstPerson : pessoa = {
    nome: "Aline",
    idade: 32,
    corFavorita: rainbowColors.VIOLETA
}

const secondPerson : pessoa = {
    nome: "Germana",
    idade: 38,
    corFavorita: rainbowColors.ANIL
}

const thirdPerson : pessoa = {
    nome: "PampaCat",
    idade: 3,
    corFavorita: rainbowColors.LARANJA
}

