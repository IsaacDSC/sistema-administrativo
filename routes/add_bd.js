//carregar os modulos
const express = require('express')
const router = express.Router()

//incluindo mongose
const mongoose = require('mongoose')

//incluindo diretório models
require('../models/HomeTopo')
const HomeTopo = mongoose.model('hometopos')
    //criando a rota
router.get('/', (req, res) => {
    //res.send('pag inicial do site')
    new HomeTopo({
        titulo: "Temos a solução que sua empresa precisa!",
        subtitulo: "This example is a quick exercise to illustrate how fixed to top navbar works. As you scroll, it will remain fixed to the top of your browser’s viewport.",
        titulobtn: "ENTRE EM CONTATO",
        urlbtn: "http://localhost:3000/contato"

    }).save().then(() => {
        console.log('Topo cadastrado com sucesso')
    }).catch((erro) => {
        console.log('error ao tentar cadastar o topo' + erro)
    })
})

//exportando o modulo
module.exports = router 