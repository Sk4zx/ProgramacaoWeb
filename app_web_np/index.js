const express = require('express');
const app = express();
const mat = require('./util/matematica');

app.get('/', function(req, res){
    res.send('pagina inicial');
})

app.get('/verifica-numero-primo/:n', function(req, res){
    let n = req.params.n;
    let ehPrimo = mat.verificarNumeroPrimo(n);
    res.send(ehPrimo);
})

app.get('/ola', function(req, res){
    res.send('Ola, Mundo');
})

app.get('/ola/:n', function(req, res){
    let nome = req.params.n;
    res.send('Ola, Mundo ' + nome);
})

const port = 8080;
app.listen(port, function(){
    console.log('app rodando na porta' + port)
})