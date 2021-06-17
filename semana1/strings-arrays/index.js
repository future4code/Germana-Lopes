// // exercício de interpretação de código

// // exercício 1

// let array
// console.log('a. ', array) 
// // --> vai imprimir a. undefined pois não foi atribuído valor
// // ao array

//  array = null
//  console.log('b. ', array)
// // --> vai imprimir b. null pois entende que null é 
// // valor nulo

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// // --> vai imprimir c. 11 (11 elementos no array)

// let i = 0
// console.log('d. ', array[i])
// // --> vai imprimir d. 3 pois o elemento 0 é o nº 3

// array[i+1] = 19 // i = 0 0+1 array[1] (array 1 = 19)
// console.log('e. ', array) 
// // vai imprimir a array com 19 no lugar do 4

// const valor = array[i+6] // array[0+6] array[6]
// console.log('f. ', valor)
// //vai imprimir f. 9 (pois 9 é o sexto elemnto do array)



// exercício 2

// const frase = prompt("Digite uma frase")
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//"Subi num ônibus em Marrocos" qual valor impresso??
// vai aparecer SUBI NUM ÔNIBUS EM MIRROCOS, 27


// exercício de escrita de código!!


// exercício 1
// const nome = prompt("Qual seu nome?")
// const email = prompt("Qual seu e-mail?")

// console.log(`O e-mail ${email} foi cadastrado com sucesso.
// Seja bem-vinda(o), ${nome}!`)


//exercício 2

// const comidasPreferidas = [`Batata frita`, `Estrogonofe`, `Arroz`, `Xis`, `Queijo`]
// console.log(comidasPreferidas)
// console.log("Essas são as minhas comidas preferidas", comidasPreferidas)

// const comidaUsuario = prompt("Qual sua comida favorita?")

// comidasPreferidas[1] = comidaUsuario 
// console.log(comidasPreferidas)


//exercício 3

const listaDeTarefas = []
const tarefa1 = prompt("Qual sua primeira tarefa de hoje?")
const tarefa2 = prompt("Qual sua segunda tarefa de hoje?")
const tarefa3 = prompt("Qual sua terceira tarefa de hoje?")
 
listaDeTarefas.push(tarefa1) 
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

const realizado = Number(prompt("Qual tarefa que você já realizou? 0, 1 ou 2?"))

listaDeTarefas.splice(realizado, 1)

console.log(listaDeTarefas)







