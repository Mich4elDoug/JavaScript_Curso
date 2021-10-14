var vogais = ["A", "E", "I", "O", "U"];

/* 
console.log(vogais[0]);   A
console.log(vogais[1]);   E
console.log(vogais[2]);   I
console.log(vogais[3]);   O
console.log(vogais[4]);   U
*/

for (let pos = 0; pos < vogais.length; pos++ ){
    console.log(`Posição ${pos}: ${vogais[pos]}`);
}

console.log();

// Ou podemos fazer assim tmb...

for (let valor in vogais){
    console.log(`Posição ${valor}: ${vogais[valor]}`);
}
