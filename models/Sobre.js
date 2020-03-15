const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Sobre = new Schema({
    titulo: {
        type: String,
        required: true
    },
    descrip:{
        type:String,
        required: true
    },
    iconUm:{
        type: String,
        required: true
    },
    tituloUm:{
        type: String,
        required: true
    },
    descricaoUm:{
        type: String,
        required: true
    },
    iconDois:{
        type: String,
        required: true
    },
    tituloDois:{
        type: String,
        required: true
    },
    descricaoDois:{
        type: String,
        required: true
    },
    iconTres:{
        type: String,
        required: true
    },
    tituloTres:{
        type: String,
        required: true
    },
    descricaoTres:{
        type: String,
        required: true
    },
    btntitle:{
        type: String,
        required: true
    }
    
})

mongoose.model('sobre', Sobre)