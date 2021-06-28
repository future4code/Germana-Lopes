// EXERCÍCIO 01
function inverteArray(array) {
  const arrayInvetido = []
  for (let i = array.length - 1; i >= 0; i--) {
    arrayInvetido.push(array[i])
  }
  return arrayInvetido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const numerosParesElevados = []
  for (let numero of array) {
    if (numero % 2 === 0) {
      numerosParesElevados.push(numero * numero)
    }
  }
  return numerosParesElevados
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const numerosPares = []
  for (let numero of array) {
    if (numero % 2 === 0) {
      numerosPares.push(numero)
    }
  }
  return numerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maior = -Infinity
  for (let numero of array) {
    if (numero > maior) {
      maior = numero
    }
  }
  return maior
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3

  const a = booleano1 && booleano2 && !booleano4
  const b = (booleano1 && booleano2) || !booleano3
  const c = (booleano2 || booleano3) && (booleano4 || booleano1)
  const d = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  const e = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

  const respostas = [a, b, c, d, e]

  return respostas
}


// EXERCÍCIO 07
// function retornaNNumerosPares(n) {
//   const numerosPares = []
//   for (let i = 0; i <= n; i++) {
//   if (i % 2 === 0) {
//     numerosPares.push(i)
//   }
//   }
//   return numerosPares

// }

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a === b && a === c) {
    return "Equilátero"
  } else if (a === b || a === c || b === c) {
    return "Isósceles"
  } else {
    return "Escaleno"
  }

}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
