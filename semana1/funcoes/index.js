//exercícios de interpretação 

//exercício 1
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// (minhaFuncao(2))
// (minhaFuncao(10))

//a) O que vai ser impresso no console?
// vai ser impresso 10 e 50 pois o return são as variáveis 2 e 10 vezes 5

//b) O que aconteceria se retirasse os dois `console.log` 
// e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
// vai retornar um erro pois o comando está após o return e isso quebra o código



//exercício 2

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a. Explique o que essa função faz e qual é sua utilidade
// // Essa função vai aplicar as funções deixar tudo em minúsculas e retornar true ou false no texto inserido pelo usuário


// // b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
// //      i.   `Eu gosto de cenoura`  = true
// //      ii.  `CENOURA é bom pra vista` = true
// //      iii. `Cenouras crescem na terra` = true

// //exercícios de escrita de código
// //1)a:

// // function minhasInfos(){
// //     console.log("Eu sou a Germana, tenho 38 anos")
// // }

// // minhasInfos()


// // b.
// function informacoesBasicas(nome, idade, cidade, profissão){
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`)   
// }

// informacoesBasicas("Germana", 38, "Porto Alegre", "estudante")


//exercício 2
//a.
// function somaDois(number1, number2){
//     const soma = number1 + number2
//     return soma 
// }

// const resultado = somaDois (5, 7)
// console.log(resultado)

//b.
// function ehMaior(num1, num2){
//     const comparacao = num1 >= num2
//     return comparacao
// }

// const resultado = ehMaior(4, 7)
// console.log(resultado)


// //c. 
// // function verificaPar(num1){
// //     const ehPar = num1 % 2 === 0
// //     return ehPar
// // }
// // const resultado = verificaPar(10)
// // console.log(resultado)

// //d. 
// // function mensagem(palavras){
// //     console.log(palavras.length, palavras.toUpperCase())
// // }

// // mensagem("Germana")


// //exercício 3
// function soma(num1, num2){
//     const resultado = num1 + num2 
//     return resultado 
// } 

// function subtracao(num1, num2){
//     const resultado = num1 - num2 
//     return resultado
// }

// function multiplicacao(num1, num2){
//     const resultado = num1 * num2 
//     return resultado 
// }

// function divisao(num1, num2){
//     const resultado = num1 / num2 
//     return resultado 
// }
 
// const numero1 = Number(prompt("Digite um número"))
// const numero2 = Number(prompt("Digite outro número"))

// console.log(soma(numero1, numero2))
// console.log(subtracao(numero1, numero2))
// console.log(multiplicacao(numero1,numero2))
// console.log(divisao12(numero1,numero2))
