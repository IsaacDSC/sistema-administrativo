//carregar os modulos
const express = require('express')
const router = express.Router()

//incluindo mongose
const mongoose = require('mongoose')

//incluindo diretório models
require('../models/HomeTopo')
const HomeTopo = mongoose.model('hometopos')

//incluindo models servicos
require('../models/Servicos')
const Servicos = mongoose.model('servicos')

//incluindo diretorio models
require('../models/Videos')
const Videos = mongoose.model('videos')

//incluindo diretorio de models
require('../models/Experience')
const Experience = mongoose.model('experience')

//incluindo diretorio models HomeFooter
require('../models/HomeFooter')
const HomeFooter = mongoose.model('homefooter')


    //criando a rota para adiconar ao bd hometopo
router.get('/hometopo', (req, res) => {
    //res.send('pag inicial do site')
    new HomeTopo({
        titulo: "Temos a solução que sua empresa precisa!",
        subtitulo: "This example is a quick exercise to illustrate how fixed to top navbar works. As you scroll, it will remain fixed to the top of your browser’s viewport.",
        titulobtn: "ENTRE EM CONTATO",
        urlbtn: "http://localhost:3000/contato"

    }).save().then(() => {
        console.log('Topo cadastrado com sucesso')
    }).catch((erro) => {
        console.log('error ao tentar cadastar o topo' + erro)
    })
})


//criando a rota para adionar ao bd servicos
router.get('/servicos',(req,res) => {
    new Servicos({
        titulo: 'Serviços',
        iconeserum:'fas fa-truck-moving',
        tituloserum: 'Serviço um',
        descserum: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        //adionando segundo SERVICO
        iconeserdois: 'fas fa-truck-loading',
        tituloserdois: 'Serviços dois',
        descserdois: 'This card has supporting text below as a natural lead-in to additional content.',
        //adiconando terceiro SERVICO
        iconesertres:'fas fa-boxes',
        titulosertres: 'Serviço tres',
        descsertres: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
    }).save().then(()=>{
        console.log('Serviço cadastrado com sucesso')
    }).catch((err)=>{
        console.log('erro ao tentar cadastrar'+ err)
    })
})

router.get('/videos', (req, res)=>{
    new Videos({
        titulo: 'Video',
        subtitulo: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        urlVideo: 'https://www.youtube.com/watch?v=rDl3gAJpm_4'
    }).save().then(()=>{
        res.send('Aba Video Cadastrada com Sucesso!')
    }).catch((err)=>{
        res.send('Erro ao cadastrar aba Video: '+ err)
    })
})

router.get('/experience', (req, res) =>{
    new Experience({
        titulo: 'Somos uma empresa...',
        descrip: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
        iconUm: 'fas fa-route',
        tituloUm: 'EXPERIÊNCIA',
        descricaoUm: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        iconDois: 'fas fa-satellite',
        tituloDois: 'TECNOLOGIA',
        descricaoDois: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        iconTres: 'far fa-handshake',
        tituloTres: 'PROXIMIDADE',
        descricaoTres: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        btntitle: 'ENTRE EM CONTATO'
    }).save().then(()=>{
        res.send('Experience cadastrado com sucesso!')
    }).catch((err)=>{
        res.send('Erro ao cadastrar Experience:' + err)
    })
})

router.get('/homefooter', (req,res)=>{
    new HomeFooter({
        title: 'Site ADM',
        linkhome: '#home',
        linkSobre: '#sobre',
        linkContact: '#contact',
        titleContact: 'Contato',
        contactOne: '(XX) XXXX-XXXX',
        linkcontactone: 'https://web.whatsapp.com/',
        contactTow: 'Av. Republica Argentina',
        linkcontacttow: 'https://www.google.com/maps/search/google+maps/@-21.9190865,-46.5001594,8z/data=!3m1!4b1',
        contactThree: 'CNPJ: XX.XXX.XXX/XXXX-XX',
        titleFollow: 'Redes Sociais',
        followOne: 'https://www.facebook.com/',
        followTow: 'https://www.instagram.com/?hl=pt-br',
        followThree: 'https://www.youtube.com/watch?v=n2ZSH0I83RM',
        followFor: 'https://twitter.com/login?lang=pt'
    }).save().then(()=>{
        res.send('homefoorter cadastrado com sucesso!')
    }).catch((err)=>{
        res.send('Erro ao cadastrar homefooter : ' + err)
    })
})

//exportando o modulo
module.exports = router 