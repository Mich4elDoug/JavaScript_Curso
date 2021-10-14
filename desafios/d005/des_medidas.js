var res = document.getElementById("result");

function conversor(){

    res.innerHTML = ''
    let meters = Number(prompt('Digite uma distância em metros(m)').replace(',','.'));

    /*
    Km      ----- / 1000
    Hm      ----- / 100
    Dam     ----- / 10
    M       ----- 1
    dm      ----- X 10
    cm      ----- X 100
    mm      ----- X 1000
    */

    let km =  (meters  / 1000).toLocaleString('pt-br', {minimumFractionDigits: 0, maximumFractionDigits: 3});

    let hm =  (meters  / 100).toLocaleString('pt-br', {minimumFractionDigits: 0, maximumFractionDigits: 3});

    let dam = (meters / 10).toLocaleString('pt-br', {minimumFractionDigits: 0, maximumFractionDigits: 3});

    let dm =  (meters  * 10).toLocaleString('pt-br', {minimumFractionDigits: 0, maximumFractionDigits: 3});

    let cm =  (meters  * 100).toLocaleString('pt-br', {minimumFractionDigits: 0, maximumFractionDigits: 3});

    let mm =  (meters  * 1000).toLocaleString('pt-br', {minimumFractionDigits: 0, maximumFractionDigits: 3});
    
    meters = meters.toLocaleString('pt-br', {minimumFractionDigits: 0, maximumFractionDigits: 3});

    res.innerHTML = ''
    res.innerHTML += `<h3>A distância de ${meters} metros, corresponde a... </h3> <br>`;
    res.innerHTML += `<p>${km} quilômetros (Km)</p>`;
    res.innerHTML += `<p>${hm} hectômetros (Hm)</p>`;
    res.innerHTML += `<p>${dam} decâmetros (Dam)</p>`;
    res.innerHTML += `<p>${dm} decímetros (dm)</p>`;
    res.innerHTML += `<p>${cm} centímetros (cm)</p>`;
    res.innerHTML += `<p>${mm} milímetros (mm)</p>`;    

}