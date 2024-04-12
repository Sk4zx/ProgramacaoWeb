let produtos = []

function criarProduto(id, nome, qnt) {
    let p = {
        id: id,
        nome: nome,
        qnt: qnt
    };
    return p;
}

function adicionarProduto(p) {
    produtos.push(p)
}

function listarProdutos() {
    return produtos
} 

function removerProduto(id) {
    produtos = produtos.filter((p) =>{
        return p.id != id
    })
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    removerProduto
}