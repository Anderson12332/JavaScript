// Funções anonimas
/*
() => {}
    1)() = por onde as funções recebem os argumentos (assim como nas funções tradicionais)

    2) => = responsavel pelo nome "arrow"

    3) {} = o bloco de codigo que representa o corpo da função

*/
function somar (a,b) {
    let total = a+b
    return console.log(total)
}
//somar(10,40)

let subtrair = (valor1,valor2) => {
    let total = valor1 - valor2
    return console.log(total)
}

subtrair(30,20)