var res = document.getElementById("result");

function temperatura(){

    res.innerHTML = ''
    
    let celsius = Number(prompt('Digite uma temperatura em °C (Celsius)').replace(',','.'));

    let fahrenheit = ((celsius * 9) / 5) + 32;
    let kelvin = celsius + 273.15;

    celsius = celsius.toFixed(2);

    fahrenheit = fahrenheit.toFixed(2);

    kelvin = kelvin.toFixed(2);

    res.innerHTML += `<h3>A temperatura ${celsius}°C, corresponde a...</h3> <br><br>`;
    res.innerHTML += `<p>${kelvin}°K (Kelvin)</p> <br>`;
    res.innerHTML += `<p>${fahrenheit}°F (Fahrenheit)</p>`;
   

}