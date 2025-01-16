function criar(){
    let numero = document.getElementById('inumero')
    let tabuada = document.getElementById('itabuada')

    if(numero.value.length==0){
        window.alert('Numero Invalido')
    }
    else{
        let n = Number(numero.value)
        tabuada.innerHTML = ''
        for(let c=1;c<=10;c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
        }
    }
}