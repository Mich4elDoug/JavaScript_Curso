var tempo = new Date();
var hora = tempo.getHours();

var corpo = document.body;
var div_hora = document.getElementById("titulo");
var div_img = document.getElementById("imagem");


function carrega_hora(){

    div_hora.innerHTML = `Agora são <b> ${hora} horas. </b>`
    if (hora >=0 && hora < 12){
        div_hora.innerHTML += `<br> Bom Dia!`;
        div_img.innerHTML = "<img src='./img/manha.png' alt='Imagem que representa a manhã'>";
        corpo.style.background = '#5f8952';
    }
    else if (hora <= 18){
        div_hora.innerHTML += `<br> Boa Tarde!`
        div_img.innerHTML = "<img src='./img/tarde.png' alt='Imagem que representa a tarde'>";
        corpo.style.background = '#c45c21';
    }
    else{
        div_hora.innerHTML += `<br> Boa Noite!`;
        div_img.innerHTML = "<img src='./img/noite.png' alt='Imagem que representa a noite'>";
        corpo.style.background = '#092437';
    }

}