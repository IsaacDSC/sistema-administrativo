const express = require('express')
const router = express.Router()

//criando rota
router.get('/', (req, res) => {
    res.render('contato/contato')
})

//exportando modulo
module.exports = router