const express = require('express')
const app = express()
const calc = require('./util/calculadora')

const port = 8080
app.listen(port, function(){
    console.log('rodando na porta 8080')
})

app.get('/somar/:a/:b', function (req, res) {
    let a = req.params.a
    let b = req.params.b
    let soma = calc.adicao(a,b)
    res.send(soma.toString());
})

app.get('/subtrair/:a/:b', function (req, res) {
    let a = req.params.a
    let b = req.params.b
    let sub = calc.subtracao(a, b)
    res.send(sub.toString());
})

app.get('/multiplicar/:a/:b', function (req, res) {
    let a = req.params.a
    let b = req.params.b
    let mult = calc.multiplicacao(a, b)
    res.send(mult.toString());
})

app.get('/dividir/:a/:b', function (req, res) {
    let a = req.params.a
    let b = req.params.b
    let div = calc.divisao(a, b)
    res.send(div.toString());
})
