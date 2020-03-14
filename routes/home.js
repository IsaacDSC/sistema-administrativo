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

//criando a rota
router.get('/', (req, res) => {
    //res.send('pag inicial do site')
    HomeTopo.findOne().then((hometopo) => {
        Servicos.findOne().then((servicos) => {
            Videos.findOne().then((videos) => {
                Experience.findOne().then((experience) => {    
                    res.render('home/home', {
                        experience:{
                            titulo:experience.titulo,
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