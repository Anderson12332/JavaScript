// let lista = ["peixe", "carne", "figado"]

//MAP

// lista.map((item, index) =>{
//     console.log(`Passando = ${item} - Posição ${index}`)
// })



// Reduce = busca reduzir um array

// let numeros = [5,4,3]

// let total = numeros.reduce((acumulador, numero, indice, original) =>{
//     console.log(`${acumulador} - o total ate o momento`)
//     console.log(`${numero} - valor atual`)
//     console.log(`${indice} - indice atual`)
//     console.log(`${original} - array original`)
//     console.log ("=================================")
//     return acumulador += numero
// })
// console.log (total)



//FIND
// let listagem = [5,3,"Jose",2,"Matheus"]

// let buscar = listagem.find((item)=>{
//     return item == "3"
// })
// console.log(buscar)


//FILTER
// let palavras = [ "Pedro", "João", "Maria", "Carlos", "Batista"]

// let resultado = palavras.filter((item)=>{
//     return item.length <= 4
// })
// console.log(resultado)

// includes, startsWit, endsWhit

// let nomes = ["anderson","jose", "matheus"]
// console.log(nomes.includes("anderson"))

// let nome = "anderson"

// console.log(nome.startsWith("and"))

let nome = "anderson"
console.log(nome.endsWith("son"))
