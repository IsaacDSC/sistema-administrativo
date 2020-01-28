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
    res.render('home/home')
})

//exportando o modulo
module.exports = router