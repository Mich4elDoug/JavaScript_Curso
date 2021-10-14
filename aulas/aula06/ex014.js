var time = new Date();
var day = time.getDay();
console.log(`Dia da semana: ${day}`);

/* 
    Domingo -- 0
    Segunda -- 1
    Terça   -- 2
    Quarta  -- 3
    Quinta  -- 4
    Sexta   -- 5
    Sábado  -- 6
*/

switch(day){
    case 0:
        console.log("Hoje é Domingo");
        break
    case 1:
        console.log("Hoje é Segunda");
        break
    case 2:
        console.log("Hoje é Terça");
        break
    case 3:
        console.log("Hoje é Quarta");
        break
    case 4:
        console.log("Hoje é Quinta");
        break
    case 5:
        console.log("Hoje é Sexta");
        break
    case 6:
        console.log("Hoje é Sábado");
        break
    case 7:
        console.log("ERRO: Dia inválido");
        break 
}