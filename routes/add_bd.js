//carregar os modulos
const express = require('express')
const router = express.Router()

//incluindo mongose
const mongoose = require('mongoose')

//incluindo modulo para criptgrafar
const bcriptjs = require('bcryptjs')

//incluindo acesso apenas com email e senha
const { eAdmin } = require('../helpers/eAdmin')

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
require('../models/Footer')
const Footer = mongoose.model('footer')

//incluindo diretorio models Sobre
require('../models/Sobre')
const Sobre = mongoose.model('sobre')

//incluindo diretorio models contato
require('../models/Contato')
const Contato = mongoose.model('contato')

//incluindo diretrorio models login
require('../models/Usuario')
const Usuario = mongoose.model('usuario')

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
router.get('/servicos', (req, res) => {
    new Servicos({
        titulo: 'Serviços',
        iconeserum: 'fas fa-truck-moving',
        tituloserum: 'Serviço um',
        descserum: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        //adionando segundo SERVICO
        iconeserdois: 'fas fa-truck-loading',
        tituloserdois: 'Serviços dois',
        descserdois: 'This card has supporting text below as a natural lead-in to additional content.',
        //adiconando terceiro SERVICO
        iconesertres: 'fas fa-boxes',
        titulosertres: 'Serviço tres',
        descsertres: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
    }).save().then(() => {
        console.log('Serviço cadastrado com sucesso')
    }).catch((err) => {
        console.log('erro ao tentar cadastrar' + err)
    })
})

router.get('/videos', (req, res) => {
    new Videos({
        titulo: 'Video',
        subtitulo: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        urlVideo: 'https://www.youtube.com/watch?v=rDl3gAJpm_4'
    }).save().then(() => {
        res.send('Aba Video Cadastrada com Sucesso!')
    }).catch((err) => {
        res.send('Erro ao cadastrar aba Video: ' + err)
    })
})

router.get('/experience', (req, res) => {
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
    }).save().then(() => {
        res.send('Experience cadastrado com sucesso!')
    }).catch((err) => {
        res.send('Erro ao cadastrar Experience:' + err)
    })
})

router.get('/footer', (req, res) => {
    new Footer({
        title: 'Site ADM',
        linkhome: '/',
        linkSobre: '/sobre',
        linkContact: '/contato',
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
    }).save().then(() => {
        res.send('foorter cadastrado com sucesso!')
    }).catch((err) => {
        res.send('Erro ao cadastrar footer : ' + err)
    })
})

/*router.get('/sobre', (req, res) => {
    new Sobre({
        title: 'Blá blá é uma empresa de trasporte!',
        subtitle: 'Uma das maiores transportadora do Brasil',
        descrip_one: 'Somos uma empresa...',
        descrip_tow: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
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
    }).save().then(() => {
        res.send('Pagina Sobre cadastrada com sucesso!')
    }).catch((err) => {
        res.send('Erro ao cadastrar pagina sobre: ' + err)
    })
})*/
router.post('/sobre', eAdmin, (req, res) => {
    Sobre.findOne({ _id: req.body._id }).then((sobre) => {
        sobre.title = req.body.title,
            sobre.subtitle = req.body.subtitle,
            sobre.descrip_one = req.body.descrip_one,
            sobre.descrip_tow = req.body.descrip_tow,
            sobre.iconUm = req.body.iconUm,
            sobre.tituloUm = req.body.tituloUm,
            sobre.descricaoUm = req.body.descricaoUm,
            sobre.iconDois = req.body.iconDois,
            sobre.tituloDois = req.body.tituloDois,
            sobre.descricaoDois = req.body.descricaoDois,
            sobre.iconTres = req.body.iconTres,
            sobre.tituloTres = req.body.tituloTres,
            sobre.descricaoTres = req.body.descricaoTres,
            sobre.btntitle = req.body.btntitle

        sobre.save().then(() => {
            req.flash('success_msg', 'Alterração Feita com Sucesso!')
            res.redirect('/sobre/edit-sobre')
                //res.send('Editado com sucesso!')
        }).catch((err) => {
            res.send('error ao editar: ' + err)
                /* req.flash('error_msg', 'Error: ' + err)
                 res.redirect('/sobre/edit-sobre')*/
        })

    }).catch((err) => {
        res.send('Error: ' + err)
    })
})

router.get('/contato', (req, res) => {
    new Contato({
        title: 'Entre em Contato – Transportadora!',
        subtitle: 'Escolha o canal de atendimento de sua preferência para orçamento ou dúvidas',
        titleContact: 'Solicite mais informações ou orçamento',
        label_one: 'Nome',
        placeholder_one: 'Nome Completo',
        label_tow: 'E-mail',
        placeholder_tow: 'Seu melhor E-mail',
        label_three: 'Assunto',
        placeholder_three: 'Assunto da Mensagem',
        label_for: 'Mensagem',
        placeholder_for: 'Digite sua mensagem...',
        title_tow: 'Fale Conosco',
        hrfuncionamento: 'Segunda a Sexta: 08:30 às 12:00 e 13:30 às 18:00',
        title_endereco: 'Endereço',
        endereco: 'Avenida Winston Churchill, 936',
        cidade_estado: 'Capão Raso - Curitiba',
        number: '(xx) xxxx-xxxx',
        btntitle: 'Enviar'
    }).save().then(() => {
        res.send('Pagina Contato cadastrada com sucesso!')
    }).catch((err) => {
        res.send('Erro ao cadastrar pagina contato')
    })
})


router.get('/login', (req, res) => {
    var senha = 'Iagent*123'
    bcriptjs.genSalt(10, (erro, salt) => {
        bcriptjs.hash(senha, salt, (erro, hash) => {
            if (erro) {
                res.send('Erro ao Criptografar esta senha')
            } else {
                var senha_cript = hash
                new Usuario({
                    nome: 'IsaacDSC',
                    email: 'isaac8.silva@hotmail.com',
                    senha: senha_cript
                }).save().then(() => {
                    res.send('Usuario Cadastrado com sucesso!')
                }).catch((err) => {
                    res.send('Usuario não cadastrado com sucesso! ' + err)
                })
            }
        })
    })

})

//exportando o modulo
module.exports = router