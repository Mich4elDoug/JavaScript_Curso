var numeros = [5, 2, 8, 3, 1, 4]

numeros[2] = 9;      // Add 0 a posição 2 do vetor    
numeros.push(0);     // Add 0 á ultima posição do vetor

console.log(`O vetor é [${numeros}]`);
console.log(`O vetor tem ${numeros.length} posições`);
console.log(`O primeiro valor do vetor é: ${numeros[0]}`);
console.log(`O vetor em ordem crescente é [${numeros.sort()}]`);