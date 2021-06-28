/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


// console.log("Boas vindas ao jogo de Blackjack!")

// let pontosUsuario
// let pontosComputador

// if (confirm("Quer iniciar uma nova rodada?")) {
//    let primeiraCartaUsuario = comprarCarta()
//    let segundaCartaUsuario = comprarCarta()
//    let primeiraCartaComputador = comprarCarta()
//    let segundaCartaComputador = comprarCarta()


//    if (pontosUsuario > pontosComputador) {
//       console.log("O usuário venceu!")
//    } else if (pontosUsuario < pontosComputador) {
//       console.log("O computador venceu!")
//    } else if (pontosUsuario === pontosComputador) {
//       console.log("Empate!")
//    }


//    if (primeiraCartaUsuario.valor === 11 && segundaCartaUsuario.valor === 11) {
//       primeiraCartaUsuario = comprarCarta()
//       segundaCartaUsuario = comprarCarta()
//    } else if (primeiraCartaComputador.valor === 11 && segundaCartaComputador.valor === 11) {
//       primeiraCartaComputador = comprarCarta()
//       segundaCartaComputador = comprarCarta()
//    }

//    pontosUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
//    pontosComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor

//    while (pontosUsuario < 21 && confirm(
//       `Suas cartas são ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto}. A carta revelada do computador é ${primeiraCartaComputador.texto}` +
//       "\n" +  // \n faz pular a linha
//       "Deseja comprar mais uma carta?"
//    )) {

//       let cartaNova = comprarCarta()
//    }

//    pontosUsuario = pontosUsuario + novaCarta.valor
// }

// else {
//    console.log("O jogo acabou")
// }




