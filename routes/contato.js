const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')


//incluindo Models Cotato
require('../models/Contato')
const Contato = mongoose.model('contato')

//incluindo models addContato
require('../models/AddContato')
const AddContato = mongoose.model('addContato')

//incluindo models Homefooter
require('../models/Footer')
const Footer = mongoose.model('footer')

//criando rota
router.get('/', (req, res) => {
    Contato.findOne().then((contato) => {
        Footer.findOne().then((footer) => {
            res.render('contato/contato', {
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
                contato: {
                    title: contato.title,
                    subtitle: contato.titleContact,
                    titleContact: contato.titleContact,
                    label_one: contato.label_one,
                    placeholder_one: contato.placeholder_one,
                    label_tow: contato.label_tow,
                    placeholder_tow: contato.placeholder_tow,
                    label_three: contato.label_three,
                    placeholder_three: contato.placeholder_three,
                    label_for: contato.label_for,
                    placeholder_for: contato.placeholder_for,
                    title_tow: contato.title_tow,
                    hrfuncionamento: contato.hrfuncionamento,
                    title_endereco: contato.title_endereco,
                    endereco: contato.endereco,
                    cidade_estado: contato.cidade_estado,
                    number: contato.number,
                    btntitle: contato.btntitle
                }
            })
        })
    })
})

router.post('/add-contato', (req, res) => {
    // acriando uma validação do formulário
    var dados_contatos = req.body
    var erros = []
    if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
        erros.push({ text: "Necesário preencher o campo nome!" })
    }
    if (!req.body.email || typeof req.body.email == undefined || req.body.email == null) {
        erros.push({ text: "Necesário preencher o campo E-mail!" })
    }
    if (!req.body.assunto || typeof req.body.assunto == undefined || req.body.assunto == null) {
        erros.push({ text: "Necesário preencher o campo Assunto!" })
    }
    if (!req.body.mensagem || typeof req.body.mensagem == undefined || req.body.mensagem == null) {
        erros.push({ text: "Necesário preencher o campo Mensagem!" })
    }
    if (erros.length > 0) {
        Contato.findOne().then((contato) => {
            Footer.findOne().then((footer) => {
                res.render('contato/contato', {
                    erros: erros,
                    dados_contatos: dados_contatos,
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
                    contato: {
                        title: contato.title,
                        subtitle: contato.titleContact,
                        titleContact: contato.titleContact,
                        label_one: contato.label_one,
                        placeholder_one: contato.placeholder_one,
                        label_tow: contato.label_tow,
                        placeholder_tow: contato.placeholder_tow,
                        label_three: contato.label_three,
                        placeholder_three: contato.placeholder_three,
                        label_for: contato.label_for,
                        placeholder_for: contato.placeholder_for,
                        title_tow: contato.title_tow,
                        hrfuncionamento: contato.hrfuncionamento,
                        title_endereco: contato.title_endereco,
                        endereco: contato.endereco,
                        cidade_estado: contato.cidade_estado,
                        number: contato.number,
                        btntitle: contato.btntitle
                    }
                })
            })
        })
    } else {
        const add_contato = {
            nome: req.body.nome,
            email: req.body.email,
            assunto: req.body.assunto,
            mensagem: req.body.mensagem
        }
        new AddContato(add_contato).save().then(() => {
            //res.redirect('/contato')
            req.flash('success_msg', 'Mensagem enviada com sucesso!')
            res.redirect('/contato')
        }).catch((err) => {
            res.flash('error_msg', 'Erro ao enviar o formulário' + err)
            res.redirect('/contato')
        })
    }

})

//exportando modulo
module.exports = router