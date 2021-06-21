// EXERCÍCIOS DE INTERPRETAÇÃO

//1. a) vai ser impresso Matheus Nachtergale, 
// Virginia Cavendish
// canal: Globo, horario: 14h

//2. a) Juca, 3, SRD
// Juba, 3, SRD
// Jubo, 3, SRD

//b) Ele copia o objeto citado após os ...

//3. a) false
// undefined

// b) o primeiro fica false pois foi o parâmetro estabelecido (backender false)
// e o segundo imprime undefined pois não é um parâmetro correto pra ser analisado


// EXERCÍCIO DE ESCRITA DE CÓDIGO

//1. a) 

// const pessoa = {
//     nome: "Germana",
//     apelidos: ["Gê", "Fanfarrona", "Mana"]
// }

// //console.log(`Eu sou a ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ou de ${pessoa.apelidos[2]}`)

// //b)
// const novaPessoa = {...pessoa, apelidos: ["Fanfa", "Martina", "Gertrudes"]}

// console.log(novaPessoa)


// Exercício 2

// const objetoUm = {
//     nome: "Germana",
//     idade: 38,
//     profissao: "Estudante" 
// }

// const objetoDois = {
//     nome: "Aline",
//     idade: 33,
//     profissao: "Desenvolvedora"
// }

// function minhaPessoa (objeto1) {
//     const array1 = [objeto1.nome, objeto1.nome.length, objeto1.idade, objeto1.profissao, objeto1.profissao.length]

//     return array1
// }

// console.log(minhaPessoa(objetoUm))
// console.log(minhaPessoa(objetoDois))


// EXERCÍCIO 3

const carrinho = []

const fruta1 = {
    nome: "banana",
    disponivel: true 
}

const fruta2 = {
    nome: "tangerina",
    disponivel: true
}

const fruta3 = {
    nome: "caqui",
    disponivel: true
}

function adicionarFrutas (fruta) {
    carrinho.push(fruta) 
}

adicionarFrutas(fruta1)
adicionarFrutas(fruta2)
adicionarFrutas(fruta3)

console.log(carrinho)





































