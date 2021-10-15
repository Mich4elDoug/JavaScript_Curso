function contar(){

    // Selecionando os campos pelo ID

    var i_txt = document.getElementById('inicio'); 
    var f_txt = document.getElementById('fim');
    var p_txt = document.getElementById('passo');

    var resultado = document.getElementById('res');

    if(i_txt.value.length == 0 || f_txt.value.length == 0 || p_txt.value.length == 0 ){

        resultado.innerHTML = '<p> <b> Impossível contar </b> </p>'

    }
    else{
        resultado.innerHTML = '<p> <b> Contando... </b> </p>'

        // Pegando os valores de cada campo

        var i = parseInt(i_txt.value); 
        var f= parseInt(f_txt.value); 
        var p = parseInt(p_txt.value); 
    

        // Atribuindo 1 como valor padrão caso o PASSO seja igual a 0

        if (p === 0) {
                p = 1
                alert("Passo Inválido... Considerando como 1");
            }

        // Verificando se o PASSO é negativo, e se sim, fazendo a conversão

        p = (p < 0) ? p *= -1 : p *= 1


        // Realizando a operação de acordo com os dados passados

        if(i < f){

            for(i; i <= f; i += p){
                resultado.innerHTML += `${i}  \u{27A1} `;
            }
        }
        else{
        
            for(i; i >= f ; i -= p){
                resultado.innerHTML += `${i}  \u{27A1} `;
            }
        }
    }

    resultado.innerHTML += `\u{1F3C1} `;
}