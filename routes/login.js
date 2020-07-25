//carregando modules
const express = require('express')
const router = express.Router()
const passport = require('passport')


//criando rota login administrativo
router.get('/', (req, res) => {
        res.render('login/login', { layout: 'login.handlebars' })
    })
    //recebendo da rota login administrativo
router.post('/', (req, res, next) => {
        passport.authenticate('local', {
            successRedirect: '/dashboard',
            failureRedirect: '/login',
            failureFlash: true,
        })(req, res, next)
    })
    //criando rota de logout para administrativo
router.get('/logout', (req, res) => {
    req.logout()
    req.flash('success_msg', 'Deslogado com sucesso!')
    res.redirect('/login')
})

//exportando module
module.exports = router