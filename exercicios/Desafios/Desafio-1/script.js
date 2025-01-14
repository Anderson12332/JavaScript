function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagen')
    var data = new Date()
    var hora =data.getHours()
    
    msg.innerHTML = `<p>Agora são ${hora} horas</p>`
    if(hora >=0 && hora < 12){
        //bom dia
        img.src = 'imagens/pexels-torsten-kellermann-349167-955656.jpg'
        document.body.style.background = '#e2cd9f'
    }
    else if(hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = 'orange'
    }
    else{
        //Boa noite
         img.src = 'imagens/noite.jpg'
    }

}