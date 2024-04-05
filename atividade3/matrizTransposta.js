function transporMatriz(A) {

    console.log("Matriz Original:");
    console.log(imprimirMatriz(A));

    // Criar matriz transposta
    const transposta = [];
    for (let i = 0; i < A[0].length; i++) {
        transposta.push([]);
        for (let j = 0; j < A.length; j++) {
            transposta[i].push(A[j][i]);
        }
    }


    console.log("Matriz Transposta:");
    console.log(imprimirMatriz(transposta));
}

function imprimirMatriz(matriz) {
    return matriz.map(row => row.join("\t")).join("\n");
}


const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

transporMatriz(matriz);
