const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AddContato = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    assunto: {
        type: String,
        required: true
    },
    mensagem: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        required: false
    }
})

mongoose.model('addContato', AddContato)