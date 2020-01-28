//carregando modules
const express = require('express')
const router = express.Router()

//criando rota
router.get('/', (req, res) => {
    res.render('login/login', { layout: 'login.handlebars' })
})

//exportando module
module.exports = router