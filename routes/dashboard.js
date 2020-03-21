const express = require('express')
const router = express.Router()
const { eAdmin } = require('../helpers/eAdmin')

router.get('/', eAdmin, (req, res) => {
    res.render('dashboard/dashboard', { layout: 'adm.handlebars' })
})
module.exports = router