const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
//adionando models Experience
require('../models/Sobre')
const Sobre = mongoose.model('sobre')

//criando rota
router.get('/', (req, res) => {
    Sobre.findOne().then((sobre)=>{
        res.render('sobre/sobre', {    
            sobre:{
                title: sobre.title,
                subtitle: sobre.subtitle,
                descrip_one: sobre.descrip_one,
                descrip_tow: sobre.descrip_tow,
                iconUm: sobre.iconUm,
                tituloUm: sobre.tituloUm,
                descricaoUm: sobre.descricaoUm,
                iconDois: sobre.iconDois,
                tituloDois: sobre.tituloDois,
                descricaoDois: sobre.descricaoDois,
                iconTres: sobre.iconTres,
                tituloTres: sobre.tituloTres,
                descricaoTres: sobre.descricaoTres,
                btntitle: sobre.btntitle
        }})
      
    }).catch((err)=>{
        res.send('error ROTA: ' + err)
    })
})

router.get('/edit-sobre', (req, res) => {
    res.render('sobre/edit-sobre', { layout: 'adm.handlebars' })
})

//exportando o modulo
module.exports = router