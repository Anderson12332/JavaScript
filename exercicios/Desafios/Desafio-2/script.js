function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('textano');
    var res = document.getElementById('res');

 
    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < 1900) {
        window.alert('Ano inválido');
    } else {
        var fsex = document.getElementsByName('sexo');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img'); 
        
        if (fsex[0].checked) {
            genero = 'Masculino';
            if (idade < 12) {
                // Criança
                img.setAttribute('src', 'imagens/masc-bebe.jpg');
            } else if (idade >= 12 && idade < 18) {
                // Adolescente
                img.setAttribute('src', 'imagens/masc-adolecente.jpg');
            } else if (idade >= 18 && idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/masc-adulto.jpg');
            } else if (idade >= 60) {
                // Idoso
                img.setAttribute('src', 'imagens/masc-idoso.jpg');
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino';
            if (idade < 12) {
                // Criança
                img.setAttribute('src', 'imagens/fem-bebe.jpg');
            } else if (idade >= 12 && idade < 18) {
                // Adolescente
                img.setAttribute('src', 'imagens/fem-adolecente.jpg');
            } else if (idade >= 18 && idade < 60) {
                // Adulto
                img.setAttribute('src', 'imagens/fem-adulto.jpg');
            } else if (idade >= 60) {
                // Idoso
                img.setAttribute('src', 'imagens/fem-idosa.png');
            }
        }
        
        res.innerHTML = `Verificamos que seu sexo é ${genero} e você tem ${idade} anos.`;
        res.appendChild(img);
    }
}
