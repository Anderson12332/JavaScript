function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('textano');
    var res = document.getElementById('res');

    // Verifica se o campo está vazio ou se o valor é maior que o ano atual
    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano)>1900){
        window.alert('Ano inválido');
    } else {
        var fsex = document.getElementsByName('sexo');
        var idade = ano - Number(fano.value);
        var genero = ''
        
        if (fsex[0].checked){
            genero = 'Masculino'

        }
        else if (fsex[[1]].checked){
            genero = 'Feminino'
        }
        res.innerHTML = `Verificamos que seu sexo é ${genero} e tem ${idade} anos`


    }
}