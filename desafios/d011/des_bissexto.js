function bissexto(){

    let res = document.getElementById("result");

    let year = parseInt(prompt('Qual o ano que você quer verificar?'));

    let leap_year = '';

    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ) {
        leap_year = "<mark style = 'background-color: green; color: white;'> É BISSEXTO</mark>";
    } else {
        leap_year = "<mark style = 'background-color: red; color: white;'> NÃO É BISSEXTO</mark>";
    }
    
    res.innerHTML = `<h3> Analisando o ano de ${year} </h3> <br>`
    res.innerHTML += `<p> O ano de ${year} ${leap_year} </p>`;

}