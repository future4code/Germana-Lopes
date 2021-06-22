// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite uma altura"))
  const largura = Number(prompt("Digite uma largura"))

  console.log(altura * largura)
}


// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Em que ano estamos?"))
  const anoNascimento = Number(prompt("Que ano você nasceu?"))

  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)
  return imc 
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual seu nome?")
  const idade = Number(prompt("Qual sua idade?"))
  const email = prompt("Qual seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Qual sua primeira cor favorita?")
  const cor2 = prompt("Qual sua segunda cor favorita?")
  const cor3 = prompt("Qual sua terceira cor favorita?")

  const coresFavoritas = [cor1, cor2, cor3]
  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const stringMaiuscula = (string.toUpperCase())
  return stringMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const ingressosVendidos = (custo / valorIngresso) 
  return ingressosVendidos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const tamanho1 = string1.length 
  const tamanho2 = string2.length 
  return tamanho1 === tamanho2 
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const elementoZero = array[0]
  return elementoZero
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimoElemento = array.length - 1
  return array[ultimoElemento] 
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroElemento = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = primeiroElemento

  return array
  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const maiuscula1 = string1.toUpperCase()
  const maiuscula2 = string2.toUpperCase()
  return maiuscula1 === maiuscula2 
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Em que ano estamos?"))
  const anoNascimento = Number(prompt("Em que ano você nasceu?"))
  const anoRG = Number(prompt("Em que ano seu RG foi emitido?"))

  const idade = (anoAtual - anoNascimento)
  const menosDeVinte = idade >= 20
  const maisDeVinte = idade >= 21 && idade <= 50
  const maisDeCinquenta = idade > 50

  }

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const anoBissexto1 = ano % 400 === 0
  const anoBissexto2 = ano % 4 === 0 && !(ano % 100 === 0 && !anoBissexto1)

  return anoBissexto1 || anoBissexto2 
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maiorDeDezoito = prompt("tem mais de 18?")
  const ensinoMedio = prompt("tem ensino médio completo?")
  const disponibilidaDeHorarios = prompt("tem disponibilidade de horários?")

  const resultado1 = maiorDeDezoito === "sim"
  const resultado2 = ensinoMedio === "sim"
  const resultado3 = disponibilidaDeHorarios === "sim"

  console.log(resultado1 && resultado2 && resultado3)
 }
