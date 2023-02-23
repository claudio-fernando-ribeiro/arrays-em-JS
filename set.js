
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
//set significa conjunto

//const meuSet = new Set([1, 1, 2, 2, 2, 2, 3, 4, 4, 4]);

//console.log(meuSet);

//ele imprime os números sem repetição, ou seja, apenas 1, 2, 3, 4.

const meuSet = new Set(nomes); //atenção, sem as []

const nomesAtualizados = [...meuSet]; //uso o espalhamento para não alterar a estrutura do array nomes, gravando os nomes sem repetição numa nova
//const.

console.log(meuSet)

