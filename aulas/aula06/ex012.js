var age = 18;
console.log(`Você tem ${age} anos`);

if (age < 16) {
    console.log("Não Vota!");
}
else if (age < 18 || age > 65){
    console.log("Voto Opcional!");
}
else{
    console.log("Voto Obrigatório!");
}