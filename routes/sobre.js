const express = require('express')
const router = express.Router()
const { eAdmin } = require('../helpers/eAdmin')

const mongoose = require('mongoose')
    //adionando models Experience
require('../models/Sobre')
const Sobre = mongoose.model('sobre')

//incluindo models Homefooter
require('../models/Footer')
const Footer = mongoose.model('footer')

//criando rota
router.get('/', (req, res) => {
    Sobre.findOne().then((sobre) => {
        Footer.findOne().then((footer) => {
            res.render('sobre/sobre', {
                footer: {
                    title: footer.title,
                    linkhome: footer.linkhome,
                    linkSobre: footer.linkSobre,
                    linkContato: footer.linkContato,
                    titleContact: footer.titleContact,
                    contactOne: footer.contactOne,
                    linkcontactone: footer.linkcontactone,
                    contactTow: footer.contactTow,
                    linkcontacttow: footer.linkcontacttow,
                    contactThree: footer.contactThree,
                    titleFollow: footer.titleFollow,
                    followOne: footer.followOne,
                    followTow: footer.followTow,
                    followThree: footer.followThree,
                    followFor: footer.followFor
                },
                sobre: {
                    title: sobre.title,
                    subtitle: sobre.subtitle,
                    descrip_one: sobre.descrip_one,
                    descrip_tow: sobre.descrip_tow,
                    iconUm: sobre.iconUm,
                    tituloUm: sobre.tituloUm,
                    descricaoUm: sobre.descricaoUm,
                    iconDois: sobre.iconDois,
                    tituloDois: sobre.tituloDois,
                    descricaoDois: sobre.descricaoDois,
                    iconTres: sobre.iconTres,
                    tituloTres: sobre.tituloTres,
                    descricaoTres: sobre.descricaoTres,
                    btntitle: sobre.btntitle
                }
            })

        })

    }).catch((err) => {
        res.send('error ROTA: ' + err)
    })
})

router.get('/edit-sobre', eAdmin, (req, res) => {
    Sobre.findOne({}).then((sobre) => {
        res.render('sobre/edit-sobre', {
            layout: 'adm.handlebars',
            sobre: {
                _id: sobre._id,
                title: sobre.title,
                subtitle: sobre.subtitle,
                descrip_one: sobre.descrip_one,
                descrip_tow: sobre.descrip_tow,
                iconUm: sobre.iconUm,
                tituloUm: sobre.tituloUm,
                descricaoUm: sobre.descricaoUm,
                iconDois: sobre.iconDois,
                tituloDois: sobre.tituloDois,
                descricaoDois: sobre.descricaoDois,
                iconTres: sobre.iconTres,
                tituloTres: sobre.tituloTres,
                descricaoTres: sobre.descricaoTres,
                btntitle: sobre.btntitle
            }
        })
    })
})


router.get('/vis-sobre', eAdmin, (req, res) => {
    Sobre.findOne().then((sobre) => {
        res.render('sobre/vis-sobre', {
            layout: 'adm.handlebars',
            sobre: {
                _id: sobre._id,
                title: sobre.title,
                subtitle: sobre.subtitle,
                descrip_one: sobre.descrip_one,
                descrip_tow: sobre.descrip_tow,
                iconUm: sobre.iconUm,
                tituloUm: sobre.tituloUm,
                descricaoUm: sobre.descricaoUm,
                iconDois: sobre.iconDois,
                tituloDois: sobre.tituloDois,
                descricaoDois: sobre.descricaoDois,
                iconTres: sobre.iconTres,
                tituloTres: sobre.tituloTres,
                descricaoTres: sobre.descricaoTres,
                btntitle: sobre.btntitle
            }
        })
    }).catch((err) => {
        req.flash('error_msg', 'Error: Não encontrado nenhum registro!' + err)
        res.redirect('/dashboard')
    })

})


//exportando o modulo
module.exports = router