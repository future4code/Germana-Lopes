//exercício 1 de interpretação de código

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2 // bool3 = true

// let resultado = bool1 && bool2 //true false
// console.log("a. ", resultado)

// // imprime a. false

// resultado = bool1 && bool2 && bool3 // t f t 
// console.log("b. ", resultado) 

// //imprime b. false

// resultado = !resultado && (bool1 || bool2) 
// //resultado = true        (t f) = t   
// console.log("c. ", resultado)
// // imprime c. true

// console.log("d. ", typeof resultado)
// // imprime d. boolean


// // exercício 2

// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// rodando o comando retorna o valor 11. É necessário
// indexar o Number antes do prompt. Feito isso, a soma
// volta a funcionar normalmente!

//exercício 3 - hehehe respondi no 2! É preciso indexar
// o Number antes do prompt que a soma funciona!


// EXERCÍCIOS DE ESCRITA DO CÓDIGO

//exercício 1

// const idade = Number(prompt("Qual sua idade?"))
// const idadeMA = Number(prompt("Qual a idade da sua melhor amiga?"))
// let resposta = idade > idadeMA 

// console.log("Sua idade é maior do que a da sua melhor amiga?", resposta)
// console.log(idade - idadeMA)



//exercício 2 

// const par = Number(prompt("Insira um número par"))
// console.log(par % 2)

// resposta - dá pra notar que retorna sempre 0 no console, pois é número par! quando se coloca um nº ímpar, retorna
// sempre o número 1



//exercício 3

// const idadeA = Number(prompt("Qual sua idade?"))

// console.log(idadeA * 12)
// console.log(idadeA * 365)
// console.log(idadeA * (365*24))


//exercício 4

// const number1 = prompt("Digite o primeiro número")
// const number2 = prompt("Digite o segundo número")

// console.log("primeiro número é maior que o segundo?", number1 > number2)
// // console.log("primeiro número é igual ao segundo?", number1 !== number2)

// let number1 = 24
// let number2 = 12
// let divisivel = number1 % number2 === 0


// console.log("o primeiro número é divisível pelo segundo?", divisivel)

// let divisivel2 = number2 % number1 === 0
// console.log("o segundo número é divisível pelo primeiro?", divisivel2)
