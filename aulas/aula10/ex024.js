function fatorial(value) {
    
    let res = 1;
    
    for(let cont = value; cont > 1; cont--){
        res *= cont;
    }

    return res;
}


let num = 5;

console.log(`O fatorial de ${num} é ${fatorial(num)}`);