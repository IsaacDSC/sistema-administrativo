const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

//incluindo Models Cotato
require('../models/Contato') 
const Contato = mongoose.model('contato')

//criando rota
router.get('/', (req, res) => {
    Contato.findOne().then((contato)=>{
        res.render('contato/contato', {
           contato:{
            title: contato.title,
            subtitle: contato.titleContact,
            titleContact: contato.titleContact,
            label_one: contato.label_one,
            placeholder_one: contato.placeholder_one,
            label_tow: contato.label_tow,
            placeholder_tow: contato.placeholder_tow,
            label_three: contato.label_three,
            placeholder_three: contato.placeholder_three,
            label_for: contato.label_for,
            placeholder_for: contato.placeholder_for,
            title_tow:contato.title_tow,
            hrfuncionamento: contato.hrfuncionamento,
            title_enderecos: contato.title_enderecos,
            endereco: contato.endereco,
            cidade_estado: contato.cidade_estado,
            number: contato.number,
            btntitle: contato.btntitle 
           }
        })
    })   
})

//exportando modulo
module.exports = router