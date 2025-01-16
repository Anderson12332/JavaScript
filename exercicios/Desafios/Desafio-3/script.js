function contar() {
    var Pinicio = document.getElementById('inicio');
    var Pfim = document.getElementById('fim');
    var Ppasso = document.getElementById('passo');
    var contagem = document.getElementById('contagem');
    var resultado = '';
    var resElement = document.getElementById('antes-da-contagem');

    // Obter valores de entrada
    var inicio = Number(Pinicio.value);
    var fim = Number(Pfim.value);
    var passo = Number(Ppasso.value);

    // Verificar se os valores são válidos
    if (passo <= 0) {
        window.alert("O valor do passo deve ser maior que 0.");
        return;
    }
    
    if (inicio == "" || fim == "" || passo == "") {
        window.alert("Por favor, preencha todos os campos.");
        return;
    }

    //crescente
    if (inicio <= fim) {
        resElement.innerText = 'Contando:';
        while (inicio <= fim) {
            resultado += inicio + ', ';
            inicio += passo;
        }
    } else { 
        //decrescente
        resElement.innerText = 'Contando:';
        while (inicio >= fim) {
            resultado += inicio + ', ';
            inicio -= passo;
        }
    }
    resultado = resultado.slice(0, -2);
    contagem.innerText = resultado;
}
