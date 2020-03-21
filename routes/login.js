//carregando modules
const express = require('express')
const router = express.Router()
const passport = require('passport')


//criando rota
router.get('/', (req, res) => {
    res.render('login/login', { layout: 'login.handlebars' })
})

router.post('/', (req, res, next) => {
        passport.authenticate('local', {
            successRedirect: '/dashboard',
            failureRedirect: '/login',
            failureFlash: true,
        })(req, res, next)
    })
    //exportando module
module.exports = router