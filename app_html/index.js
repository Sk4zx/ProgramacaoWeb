const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

port = 8080
app.listen(port, function(){
    console.log('app_html rodando na porta'+port)
})

app.engine('html', mustacheExpress())

app.set('view engine', 'html')
app.set('views', __dirname + '/views')

app.get('/', function(req, res){
    let nome = 'Pedro'
    res.render('index.html', {nome})
})

app.get('/contato', function(req, res){
    res.render('contato.html')
})