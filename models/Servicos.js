const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Servicos = new Schema({
    titulo: {
        type: String,
        required: true
    },
    iconeserum:{
        type: String,
        required: true
    },
    tituloserum:{
        type: String,
        required:true
    },
    descserum: {
        type: String,
        required: true
    },
    iconeserdois:{
        type: String,
        required: true
    },
    tituloserdois:{
        type: String,
        required:true
    },
    descserdois: {
        type: String,
        required: true
    },
    iconesertres:{
        type: String,
        required: true
    },
    titulosertres:{
        type: String,
        required:true
    },
    descsertres: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        required: false
    }
})

mongoose.model('servicos', Servicos)