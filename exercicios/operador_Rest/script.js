// let pessoa = {
//     nome: "Pedro",
//     sobrenome: "Suarez",
//     cargo: "Estudante",
//     materia: "Programação"
// }
// // console.log(pessoa)
// // console.log(pessoa.cargo)
// // const {nome,cargo,materia} = pessoa;
// // console.log(nome)
// // console.log(cargo)

// let nomes = ["Matheus", "Pedro","João"]
// let {0:pessoa1, 1:pessoa2} = nomes;
// console.log(pessoa1)

function sorteador(...numeros){
    console.log(numeros)

    const gerarnumero = Math.floor(Math.random()*numeros.length) ;
    console.log(numeros[gerarnumero])
}
sorteador(1,2,3,4,87,90,55,54,25,87)