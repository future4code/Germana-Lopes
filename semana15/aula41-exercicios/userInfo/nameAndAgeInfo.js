//  EXERCÍCIO B
// Rodar o npm start passando como primeiro argumento o nome e o segundo argumento a idade
//Exemplo: 
// npm start Germana 39

// const user = {
//     name: process.argv[2],
//     age: process.argv[3]
// }

// console.log(`Olá, ${user.name}! Você tem ${user.age} anos!`)


// EXERCÍCIO C

const user = {
    name: process.argv[2],
    age: process.argv[3]
}

const userPlusSeven = Number(user.age) + 7

console.log(`Olá, ${user.name}! Você tem ${user.age} anos! Em 7 anos você terá ${userPlusSeven}.`)



