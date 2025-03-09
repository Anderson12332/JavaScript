var nume =[]


function adicionar(){
var qn = document.getElementById('inumero')
var ad = document.getElementById('ivalores')
var n = Number(qn.value)
var item = document.createElement('option')
var res = document.getElementById('res')


    if(qn.value.length == 0){
        window.alert('Numero invalido, insira outro valor')
    }
    else if (nume.includes(n)){
        window.alert('Esse número ja foi adicionado')    
    }
    else{
        nume.push(n)
        item.text = `O valor ${n} foi adicionado`
        ad.appendChild(item)
    }
}

function analise(){
    var qn = document.getElementById('inumero')
    var ad = document.getElementById('ivalores')
    var n = Number(qn.value)
    var item = document.createElement('option')
    var res = document.getElementById('res')
////////////////////////////////////////////////////////
    if(nume==0){
        window.alert('Não possui numeros adicionados')
    }
///////////////////////////////////////////////////////
        else{
        for(i=0,soma=0;i<nume.length;i++){
            soma+= nume[i];
        }
        for(i=0,media=0;i<nume.length;i++){
            media = soma/nume.length
        }
////////////////////////////////////////////////////////

        res.innerHTML = `<p>Ao todo, temos ${nume.length} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor é ${Math.max(...nume)}</p>`
        res.innerHTML += `<p>O menor valor é ${Math.min(...nume)}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}`
        res.innerHTML += `<p>A media dos valores adicionados é ${media}`
}}
function apagarTudo(){
    var ad = document.getElementById('ivalores');
    ad.innerHTML = '';
    var res = document.getElementById('res')
    res.innerHTML=''
    nume.length = 0

}