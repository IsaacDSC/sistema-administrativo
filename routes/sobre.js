const express = require('express')
const router = express.Router()

//criando rota
router.get('/', (req, res) => {
    res.render('sobre/sobre')
})

router.get('/edit-sobre', (req, res) => {
    res.render('sobre/edit-sobre', { layout: 'adm.handlebars' })
})

//exportando o modulo
module.exports = router