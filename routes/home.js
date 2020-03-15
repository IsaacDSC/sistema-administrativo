//carregar os modulos
const express = require('express')
const router = express.Router()
//incluindo mongose
const mongoose = require('mongoose')

//incluindo diretório models
require('../models/HomeTopo')
const HomeTopo = mongoose.model('hometopos')

//incluindo Models servicos
require('../models/Servicos')
const Servicos = mongoose.model('servicos')

//incluindo Models Videos
require('../models/Videos')
const Videos = mongoose.model('videos')

//incluindo models Exprerience
require('../models/Experience')
const Experience = mongoose.model('experience')

//incluindo models Homefooter
require('../models/Footer')
const Footer = mongoose.model('footer')

//criando a rota
router.get('/', (req, res) => {
    //res.send('pag inicial do site')
    HomeTopo.findOne().then((hometopo) => {
        Servicos.findOne().then((servicos) => {
            Videos.findOne().then((videos) => {
                Experience.findOne().then((experience) => {
                   Footer.findOne().then((footer) => {
                        res.render('home/home', {
                            footer:{
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
                            experience: {
                                titulo: experience.titulo,
                                descrip: experience.descrip,
                                iconUm: experience.iconUm,
                                tituloUm: experience.tituloUm,
                                descricaoUm: experience.descricaoUm,
                                iconDois: experience.iconDois,
                                tituloDois: experience.tituloDois,
                                descricaoDois: experience.descricaoDois,
                                iconTres: experience.iconTres,
                                tituloTres: experience.tituloTres,
                                descricaoTres: experience.descricaoTres,
                                btntitle: experience.btntitle
                            },
                            videos: {
                                titulo: videos.titulo,
                                subtitulo: videos.subtitulo,
                                urlVideo: videos.urlVideo
                            },
                            servicos: {
                                titulo: servicos.titulo,
                                iconeserum: servicos.iconeserum,
                                tituloserum: servicos.tituloserum,
                                descserum: servicos.descserum,
                                iconeserdois: servicos.iconeserdois,
                                tituloserdois: servicos.tituloserdois,
                                descserdois: servicos.descserdois,
                                iconesertres: servicos.iconesertres,
                                titulosertres: servicos.titulosertres,
                                descsertres: servicos.descsertres,
                            },
                            hometopo: {
                                titulo: hometopo.titulo,
                                subtitulo: hometopo.subtitulo,
                                titulobtn: hometopo.titulobtn
                            }
                        })
                    })
                })

            }).catch((err) => {
                res.send('error servicos' + err)
            })

        })
        //console.log(hometopo)
    }).catch((err) => {
        res.send('Error: ' + err)
    })

})

//exportando o modulo
module.exports = router