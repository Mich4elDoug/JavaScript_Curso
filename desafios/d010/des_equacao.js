function equacao(){

    let res = document.getElementById("result");


    let a = prompt('Qual é o valor de a?');
    let b = prompt('Qual é o valor de b?');
    let c = prompt('Qual é o valor de c?');

    let delta = (b * b) - (4 * a * c);
    

    res.innerHTML = `<h3> Para...  a = ${a}, b = ${b} e c = ${c} </h3> <br>`
    res.innerHTML += `<p> O cálculo realizado será Δ = ${b}² - 4 . ${a} . ${c} </p>`;
    res.innerHTML += `<p> O valor do cálculo foi <mark>Δ = ${delta} </mark></p>`;

}