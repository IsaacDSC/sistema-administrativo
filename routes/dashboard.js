const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('dashboard/dashboard', { layout: 'adm.handlebars' })
})
module.exports = router