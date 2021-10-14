var time = new Date();
var hour = time.getHours();

console.log(`Agora são ${hour} horas`);

if (hour < 6) {
    console.log("Bora dormir que ta de madrugada já :)");
}
else if (hour < 12){
    console.log("Bom Dia!");
}
else if (hour <= 18){
    console.log("Boa Tarde!");
}
else{
    console.log("Boa noite!");
}