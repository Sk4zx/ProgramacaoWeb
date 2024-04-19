const express = require('express');
const app = express();
const estoque = require('./estoque');

const port = 8080;
app.listen(port, function () {
    console.log('Atividade 5 rodando na porta ' + port);
});

app.get('/adicionar/:id/:nome/:qtd', function (req, res) {
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;
    estoque.adicionarProduto(id, nome, qtd);
    res.send("Produto adicionado com sucesso.");
});

app.get('/listar', function (req, res) {
    res.send(estoque.listarProdutos());
});

app.get('/remover/:id', function (req, res) {
    let id = req.params.id;
    estoque.removerProduto(id);
    res.send("Produto removido com sucesso.");
});

app.get('/editar/:id/:qtd', function (req, res) {
    let id = req.params.id;
    let qtd = req.params.qtd;
    estoque.editarProduto(id, qtd);
    res.send("Produto editado com sucesso.");
});