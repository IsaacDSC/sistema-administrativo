const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Contato = new Schema({
    title:{
        type: String,
        required: true
    },
    subtitle:{
        type: String,
        required: true
    },
    titleContact:{
        type: String,
        required: true
    },
    label_one:{
        type: String,
        require: true
    },
    placeholder_one:{
        type: String,
        required: true
    },
    label_tow:{
        type: String,
        require: true
    },
    placeholder_tow:{
        type: String,
        required: true
    },
    label_three:{
        type: String,
        require: true
    },
    placeholder_three:{
        type: String,
        required: true
    },
    label_for:{
        type: String,
        required: true
    },
    placeholder_for:{
        type: String,
        required: true
    },
    title_tow:{
        type: String,
        required: true
    },
    hrfuncionamento:{
        type: String,
        required: true
    },
    title_endereco:{
        type: String,
        required: true
    },
    endereco:{
        type:String,
        required: true
    },
    cidade_estado:{
        type: String,
        require: true
    },
    number:{
        type: String,
        required: true
    },
    btntitle:{
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

//exportando 
mongoose.model('contato', Contato)