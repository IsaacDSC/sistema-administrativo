const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

//para incluir o diretorio de routes 
const home = require('./routes/home')
const sobre = require('./routes/sobre')
const contato = require('./routes/contato')


//config body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//congigurando para que o handlebars mostre os layouts 
app.engine('handlebars', handlebars({ defaultLayout: "main" }))
app.set('view engine', 'handlebars')

//adionando as rotas
app.use('/', home)
app.use('/sobre', sobre)
app.use('/contato', contato)


const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor iniciado!`)
    console.log(`http://localhost:${PORT}`)
    console.log('BREAK SERVER ctrl + c')
})