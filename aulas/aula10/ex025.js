function fatorial(num){
    let res = 1

    if (num == 1){
        return 1;
    }
    else{
        return res = num * fatorial(num -1);
    }
}

let numero = 8;

console.log(`O fatorial de ${numero} é ${fatorial(numero)}`);


/* 

5! = 5 x 4 x 3 x 2 x 1 = 120
5! = 5 x 4!

1! = 1;
n! = n x (n -1)!

*/