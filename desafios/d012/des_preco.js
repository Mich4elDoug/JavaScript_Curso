function preco(){

    let res = document.getElementById("result");

    let previous_price = Number(prompt('Qual era o preço anterior do produto? R$'));
    let current_price = Number(prompt('Qual é o preço atual do produto? R$'));
        
    res.innerHTML = `<h3> Analisando os valores informados...</h3> <br>`
    res.innerHTML += `<p> O produto custava R$ ${previous_price} e agora custa R$ ${current_price}.</p>`;

    let price = Math.abs(current_price - previous_price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});;
    let percentage = 0;

    if (current_price > previous_price) {

        percentage =  (((current_price / previous_price) - 1) * 100).toFixed(2);
        res.innerHTML += `<p> Hoje o produto está mais caro. </p>`;
        res.innerHTML += `<p> O preço subiu ${price} em relação ao preço anterior.</p>`;
        res.innerHTML += `<p> Uma variação de ${percentage}% pra cima.</p>`;
        
    } else {

        percentage = (((previous_price / current_price) - 1) * 100).toFixed(2);

        res.innerHTML += `<p> Hoje o produto está mais barato. </p>`;
        res.innerHTML += `<p> O preço caiu ${price} em relação ao preço anterior.</p>`;
        res.innerHTML += `<p> Uma variação de ${percentage}% pra baixo.</p>`;
    }

}