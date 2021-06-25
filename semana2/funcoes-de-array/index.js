// EXERCÍCIOS DE INTERPRETAÇÃO

//1. vai ser impresso o mesmo array por causa do 
// map e vai imprimir cada objeto que está no array

//2. o novoArrayB vai ser impresso apenas com os
// nomes ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

//3. vai ser impresso os nomes e apelidos que são 
// diferentes (!==) de Chijo, ou seja Mandi e Laura

// EXERCÍCIOS DE ESCRITA 

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
// ]

// // //1. a) 

// // const nomeDoguinhos = pets.map((item, index, array) => {
// //     return item.nome 
// // })

// // console.log(nomeDoguinhos)

// // //b)

// // const apenasSalsichas = pets.filter((pet) => {
// //     return pet.raca === "Salsicha"    
// // })

// // console.log(apenasSalsichas)

// // //c)

// // const apenasPoodles = pets.filter((pet) => {
// //     return pet.raca === "Poodle" 
// // }).map((pet) => {
// //     return "Você ganhou um cupom de desconto de 10% para tosar o/a " + pet.nome
// // } ) 

// // console.log(apenasPoodles)


// // Exercício 2

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
// //a)

// const somenteNomesItens = produtos.map((item) => {
//     return item.nome 
// })

// console.log(somenteNomesItens)

//b)

// const nomeEPreco = produtos.map((produto) => {
//     const desconto = produto.preco * 0.05
//     const precoFinal = produto.preco - desconto
    
//     return {nome: produto.nome, preco: precoFinal}
// })

// console.log(nomeEPreco)

//c)

// const apenasBebidas = produtos.filter((produto) => {
//     return produto.categoria === "Bebidas"
// })

// console.log(apenasBebidas)

//d) e e)

// const apenasYpe = produtos.filter((produto) => {
//     return produto.nome.includes("Ypê")
// }).map((produto) => {
//     return `Compre ${produto.nome} por ${produto.preco}`
// })

// console.log(apenasYpe)




















