const notas = [7, 7, 8, 9];
const novasNotas = notas;

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);

/* É possível perceber que o push alterou o array original, o que não deveria acontecer, 
para evitar isso deve-se fazer o que vem abaixo */

const notas2 = [1, 1, 2, 3];
const novasNotas2 = [...notas2, 4];
/* Operador chamado "operador de espalhamento"
É assim que se faz uma cópia de um array
Observe que o número que quero add no array, vem logo após a nova atribuição */


console.log(`As novas notas são ${novasNotas2}`);
console.log(`As notas originais são ${notas2}`);

let num1 = 10;
let num2 = num1;

num2 += 5;
num1 += 1;

console.log(`Num1 é ${num1}. Num2 é ${num2}`);

/* const arrayOriginal = [7, 7, 8, 9];
function alteraArray(array) {
  array.push(10);
  console.log(`array do parâmetro é ${array}`);
  console.log(`arrayOriginal é ${arrayOriginal}`);
}

alteraArray(arrayOriginal); */

/* Após passar arrayOriginal como parâmetro de alteraArray, 
o utilizamos como o parâmetro array. 
O código array.push(10) alterou ambos os arrays, 
assim como o que houve no exemplo que fizemos a atribuição. 
Ou seja, novamente, foi passada a referência 
do array em si, e não uma cópia dele. */

/* De forma análoga à solução do vídeo, caso queiramos 
passar uma cópia do array e não sua referência, 
trocamos o código alteraArray(arrayOriginal) 
por alteraArray([...arrayOriginal]). Assim, a saída será:
 */

const arrayOriginal = [7, 7, 8, 9];

function alteraArray(array) {
  array.push(10);

  console.log(`array do parâmetro é ${array}`);
  console.log(`arrayOriginal é ${arrayOriginal}`);
}

alteraArray([...arrayOriginal]);
