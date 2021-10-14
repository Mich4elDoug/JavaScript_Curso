function media(){

    let res = document.getElementById("result");

    let name = prompt('Qual é o nome do aluno(a)?');

    let grade_1 = prompt(`Primeira nota de ${name}?`).replace(',','.');
    let grade_2 = prompt(`Segunda nota de ${name}?`).replace(',','.');


    grade_1 = Number(grade_1);
    grade_2 = Number(grade_2);

    average = (grade_1 + grade_2) / 2;

    let final = '';

    if (average >= 6) {
        final = "Com média acima de 6,0 o aluno está <mark style = 'background-color: green; color: white;'>APROVADO!</mark>";    
    } else if (average >= 3 && average < 6) {
        final = "Com média entre 3,0 e 6,0, o aluno está em <mark style = 'background-color: orange; color: white;'>RECUPERAÇÃO!</mark>";    
    } else {
        final = "Com média abaixo de 3,0 o aluno está em <mark style = 'background-color: red; color: white;'>RECUPERAÇÃO!</mark>";    

    }

    average = average.toFixed(2);
    grade_1 = grade_1.toFixed(2)
    grade_2 = grade_2.toFixed(2)

    res.innerHTML = `<h3> Analisando a situação de ${name}...</h3> <br>`
    res.innerHTML += `<p> Com as notas ${grade_1} e ${grade_2}, a <b> média é ${average}</b> </p>`;
    res.innerHTML += `<p> ${final}<p>`

}