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

router.get('/logout', (req, res) => {
    req.logout()
    req.flash('success_msg', 'Deslogado com sucesso!')
    res.redirect('/login')
})

//exportando module
module.exports = router