// letra a)

function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas : object = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// const info : object = obterEstatisticas([1, 3, 30])
// console.log(info)


// letra c)
type amostraDeIdades = {
    numeros : number[],
    obterEstatisticas : (numeros: number[]) => object
} 

const amostraDeDados : amostraDeIdades = {
    numeros : [10, 320, 12, 9],
    obterEstatisticas : obterEstatisticas
}

const info : object = obterEstatisticas(amostraDeDados.numeros) 
console.log(info)