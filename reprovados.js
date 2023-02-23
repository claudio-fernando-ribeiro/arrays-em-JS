const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro', 'Evandro'];
const medias = [7, 4.5, 8, 7.5, 5];

const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] <7;
})

console.log(reprovados)

/* utilizando o filter para filtrar elementos de um array.
No caso queremos um novo array apenas com os alunos reprovados.
A condição é colocada diretamente no return, e depende de um boleano,
se a condição do indice for verdadeira (<7), ele passa a compor a lista. */