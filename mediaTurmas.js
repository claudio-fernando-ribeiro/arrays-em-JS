const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);
    const media = somaDasNotas / notasDaSala.length;

    return media;

}

console.log(`A média da sala de JS é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);

/*reduce tem uma forma bem específica de ser utilizado, passando um acumulador (acumulador + nota)
e um segundo parâmetro (no caso é o 0), aonde ele soma rapidamente todos os dados de um array.
Muito bom para ser utilizado com em grandes somas, e mais uma alternativa para o for.*/
