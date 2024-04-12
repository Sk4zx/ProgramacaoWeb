const express = require('express')
const estoque = require('./src/estoque')
const app = express()

const port = 8080
app.listen(port, function(){
    console.log('rodando na porta ' + port)
})

app.get('/adicionar/:id/:nome/:qtd', function(req, res){
    let id = req.params.id
    let nome = req.params.nome
    let qtd = req.params.qtd
    let p = estoque.criarProduto(id, nome, qtd)
    estoque.adicionarProduto(p)
    res.send(p)
})

app.get('/listar', function(req,res){
    res.send(estoque.listarProdutos())
})

app.get('/remover/:id', function(req,res){
    let id = req.params.id
    estoque.removerProduto(id)
    res.send(id)
})