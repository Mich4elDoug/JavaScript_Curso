var txt_num = document.getElementById("numero");
var tabela = document.getElementById("tabela");
var res = document.getElementById("resultado");

var  numeros = [];


function isNumero(n){
    if ( Number(n) >=1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(num, lista){
    
    if (lista.indexOf(Number(num)) != -1) {
        return true;
    } else {
        return false;
    }
}


function adicionar(){
   
    if (isNumero(txt_num.value) && !inLista( txt_num.value , numeros)) {

        let num = parseInt(txt_num.value);
        numeros.push(num);

        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado`;
        tabela.appendChild(item);
        res.innerHTML = '';

        txt_num.value = '';
        txt_num.focus();

        
        
    } else {
        alert("ERRO: Valor inválido ou já encontrado na lista!");
    }
}


function resultado(){   
    
    if (numeros.length == 0) {

        alert("ERRO: Nenhum valor inserido!");

    } else {
        
        var soma = 0;
    
        for (let elemento of numeros) {
            soma += elemento; 
            console.log(soma);
        }

    
        res.innerHTML = `<p> Ao todo temos <b>${numeros.length}</b> valores cadastrados </p>`;
    
        res.innerHTML += `<p> O maior valor informado foi <b>${Math.max(...numeros)}</b> </p>`;
    
        res.innerHTML += `<p> O menor valor informado foi <b>${Math.min(...numeros)}</b> </p>`;
    
        res.innerHTML += `<p> Somando todos os valores, temos <b>${soma}</b> </p>`;
    
        res.innerHTML += `<p> A média dos valores digitados é <b>${soma/ numeros.length}</b> </p>`;
    }

}