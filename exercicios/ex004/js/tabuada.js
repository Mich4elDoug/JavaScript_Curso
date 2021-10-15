function  calcular(){

    var num_txt = document.getElementById('numero');
    var resultado = document.getElementById("tabuada");
    

    if (num_txt.value.length == 0 || num_txt.value > 1000){

        alert('[ERRO]: Insira um número válido para que eu possa realizar a conta!')
    }
    else{
        
        var num = parseInt(num_txt.value);
        resultado.innerHTML = '';

        for(var cont = 0; cont <= 10; cont++){

            var item = document.createElement('option');
            item.text += `${num} x ${cont} = ${num * cont}`;
            resultado.appendChild(item);
            
        }
    }

}

