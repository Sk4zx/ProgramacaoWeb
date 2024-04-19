let produtos = [];

function adicionarProduto(id, nome, qnt) {
    let p = {
        id: id,
        nome: nome,
        qnt: qnt
    };
    produtos.push(p);
}

function listarProdutos() {
    return produtos;
}

function removerProduto(id) {
    produtos = produtos.filter((p) => {
        return p.id != id;
    });
}

function editarProduto(id, qtd) {
    const index = produtos.findIndex(p => p.id === id);
    if (index !== -1) {
        produtos[index].qnt = qtd;
    }
}

module.exports = {
    adicionarProduto,
    listarProdutos,
    removerProduto,
    editarProduto
};