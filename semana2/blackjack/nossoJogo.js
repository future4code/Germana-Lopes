
console.log("Boas vindas ao jogo de Blackjack!")

let pontosUsuario
let pontosComputador

if (confirm("Quer iniciar uma nova rodada?")) {
   const primeiraCartaUsuario = comprarCarta()
   const segundaCartaUsuario = comprarCarta()
   const primeiraCartaComputador = comprarCarta()
   const segundaCartaComputador = comprarCarta()

   pontosUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
   pontosComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor

   console.log(`Usuário - cartas: ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} - pontuação ${pontosUsuario}`)
   console.log(`Computador - cartas: ${primeiraCartaComputador.texto} ${segundaCartaUsuario.texto} - pontuação ${pontosComputador}`)

   if (pontosUsuario > pontosComputador) {
      console.log("O usuário venceu!")
   } else if (pontosUsuario < pontosComputador) {
      console.log("O computador venceu!")
   } else if(pontosUsuario === pontosComputador) {
      console.log("Empate!")
   } 

} else {
   console.log("O jogo acabou")
}









