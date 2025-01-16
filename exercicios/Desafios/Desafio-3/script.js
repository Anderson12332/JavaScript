function contar(){
    var Pinicio = document.getElementById('inicio')
    var Pfim = document.getElementById('fim')
    var Ppasso = document.getElementById('passo')
    var contagem = document.getElementById('contagem')
//////////////////////
    var inicio = Number(Pinicio.value)
    var fim = Number(Pfim.value)
    var passo = Number(Ppasso.value)
    var resultado = ''
    var resElement = document.getElementById('antes-da-contagem')

    if(passo <= 0 || fim<=0){
        window.alert("Valor invalido")
        return
    }
    else{
    resElement.innerText = 'Contando:'

    while (inicio <= fim){
        resultado+=inicio+ ','
        inicio+=passo
        contagem.innerText = resultado
    }
    resultado = resultado.slice(0,-1)
    document.getElementById('contagem').innerText = resultado
}
}