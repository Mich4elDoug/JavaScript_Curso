function Par_Impar(num){
    if (num % 2 == 0){
        return "O número é PAR!";
    }
    else{
        return "O número é ÍMPAR!";
    }
}

var numero = 4;

console.log(Par_Impar(numero));