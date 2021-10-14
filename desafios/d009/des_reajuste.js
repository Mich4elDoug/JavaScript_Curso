function reajuste(){

    let res = document.getElementById("result");

    let name = prompt('Qual é seu nome?');

    let salary = Number(prompt(`Qual é o salário de ${name}`));
    let percentage = Number(prompt(`O salário de ${name} vai ser reajustado em qual porcentagem?`));

    let increase = salary * (percentage / 100);
    let final_salary = salary +  increase;
    
    salary = salary.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    final_salary = final_salary.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    increase = increase.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    
    res.innerHTML = `<h3> ${name} recebeu um aumento de ${percentage}% </h3> <br>`
    res.innerHTML += `<p> O salário atual era R$${salary}.</p>`;
    res.innerHTML += `<p> Com um aumento de ${percentage}%, o salário de ${name} vai aumentar R$${increase}.</p>`
    res.innerHTML += `<p> E a partir daí, ${name} vai passar a ganhar R$${final_salary}.</p>`

}