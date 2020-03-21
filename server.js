const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
    //incuindo arquivo para validação
require('./config/autenticate')(passport)

//adicionando tradutor para Banco de dados
const mongoose = require('mongoose')

//para incluir o diretorio de routes 
const home = require('./routes/home')
const sobre = require('./routes/sobre')
const contato = require('./routes/contato')
const login = require('./routes/login')
const add_bd = require('./routes/add_bd')
const dashboard = require('./routes/dashboard')


//adionando conexao com o banco de dados
mongoose.connect('mongodb://localhost/siteAdm', {
    useNewUrlParser: true,
    useUnifiedToplogy: true

}).then(() => {
    console.log('Sucess connection in BD')
}).catch((erro) => {
    console.log('erro connection in mongoDb' + erro)
})


//config body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//congigurando para que o handlebars mostre os layouts 
app.engine('handlebars', handlebars({ defaultLayout: "main" }))
app.set('view engine', 'handlebars')

//Carregar arquivos estáticos ==  css, img, font, js etc...
app.use(express.static(path.join(__dirname, 'public')))

//configuração da sessao
app.use(session({
    secret: "cursodenode",
    resave: true,
    saveUninitialized: true
}))

// configurando  passport
app.use(passport.initialize())
app.use(passport.session())


//config flash
app.use(flash())

//configurando midleware flash
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    res.locals.user = req.user || null
    next()
})

//adionando as rotas
app.use('/', home)
app.use('/sobre', sobre)
app.use('/contato', contato)
app.use('/login', login)
app.use('/add_bd', add_bd)
app.use('/dashboard', dashboard)


const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor iniciado!`)
    console.log(`http://localhost:${PORT}`)
    console.log('BREAK SERVER ctrl + c')
})