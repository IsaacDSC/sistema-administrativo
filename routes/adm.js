//carregando modules
const express = require('express')
const router = express.Router()

//adicionando rotas
router.get('/', (req, res) => {
    res.render('admin/admin', { layout: 'adm.handlebars' })
})

//exportando module
module.exports = router