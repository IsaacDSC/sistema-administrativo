const express = require('express')
const router = express.Router()

//criando rota
router.get('/', (req, res) => {
    res.render('sobre/sobre')
})

//exportando o modulo
module.exports = router