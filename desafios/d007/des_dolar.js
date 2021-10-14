var dollar_value = Number(prompt('Antes de mais nada, quanto está a cotação do dolar agora ? R$').replace(',', '.'));


function conversor(){

    let res = document.getElementById("result");

    let reais = Number(prompt(`Informe quantos R$ você tem na sua carteira:`).replace(',', '.'));

    let dollar = (reais / dollar_value).toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2});

    reais = reais.toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    dollar_value = dollar_value.toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2});

    res.innerHTML = `<h3>A cotação do dolar é de R$${dollar_value} e...</h3> <br>`;
    res.innerHTML += `<p> Considerando que você possui R$${reais} na sua carteira e que a cotação está nesse preço, você consegue resgatar US$${dollar}...</p>`

}