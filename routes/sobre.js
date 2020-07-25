const express = require('express')
const router = express.Router()
const { eAdmin } = require('../helpers/eAdmin')
const multer = require('multer')
const fs = require('fs')
    //const path = require('path')
const folder = 'public/img/upload/'
const errors = []



const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        //console.log(file.mimetype)
        detalhes.push({ message: file })
        if (file.mimetype == 'image/jpeg') {
            cb(null, folder)
        } else {
            errors.push({ message: 'Selecione uma Imagem com formato JPEG' })
            cb(null, '')
        }

    },
    filename: function(req, file, cb) {
        fs.readdir(folder, (err, paths) => {
            //console.log(paths)
            cb(null, paths.length + 1 + '-' + file.originalname)
        })
    }
})
const upload = multer({
    storage,
    /*     fileFilter: (req, file, cb) => {
            if(file.mimetype == 'image/jpg'){
                cb(null, true)
        }else{
            cb(null, false)

        } */


})




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

router.get('/edit-sobre-img', (req, res) => {
    res.render('sobre/edit-sobre-img', { layout: 'adm.handlebars' })
})


router.post('/update-sobre-img', upload.single('img'), (req, res) => {
    const file = req.file
    if (req.body.img == null || req.body.img == undefined) {
        req.flash('error_mesg', 'Selecione um arquivo Válido!')
    }
    if (!file) {
        req.flash('error_msg', 'Este arquivo não é uma imagem')
        res.redirect('/sobre/vis-sobre-img')
    }
    if (errors.length > 1) {
        for (error of errors) {
            res.send(error.message)
        }
    } else {
        res.send('Imagem enviada com sucesso!')
            /*  console.log(errors.length) */
            /* req.flash('success_msg', 'Imagem enviada com sucesso!')
            res.redirect() */
    }

})




//exportando o modulo
module.exports = router