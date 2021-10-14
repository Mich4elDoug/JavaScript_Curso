function desconto(){

    let res = document.getElementById("result");

    let product = prompt(`Qual é o produto que você está comprando?`);
    let price = Number(prompt(`Qual é o preço de ${product}? R$`).replace(',', '.'));


    let discount = (price * 0.1).toFixed(2);
    let final_price = price - discount;

    res.innerHTML = `<h3> Calculando desconto de 10% para ${product}. </h3> <br>`
    res.innerHTML += `<p> O preço original era R$${price}.</p>`;
    res.innerHTML += `<p> Você acaba de ganhar R$${discount} de desconto (-10%).</p>`
    res.innerHTML += `<p> No fim, você vai pagar R$${final_price} no produto ${product}.</p>`

}