function troco(){

    let product = prompt(`Qual produto você está comprando ?`);
    
    let product_price = Number(prompt(`Quanta custa o/a ${product} que você está comprando? R$`));
    let money = Number(prompt(`Qual foi o valor que você deu para pagar o/a ${product} ? R$`));

    let change_money = money - product_price;

    if (money >= product_price) {
        alert(`Você comprou ${product} que custou R$${product_price}.\nDeu R$${money} em dinheiro e receberá R$${change_money} de troco. \nVolte Sempre \u{1F917}`);
    } else {
        change_money *= -1;
        alert(`Infelizmente não seá possível comprar o/a ${product}, \nÉ necessário acrescentar mais R$${change_money} para compra-lo.`);
    }
}