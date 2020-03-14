const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Videos = new Schema({
    titulo:{
        type: String,
        required: true
    },
    subtitulo:{
        type: String,
        required: true
    },
    urlVideo:{
        type: String,
        required:true
    },
    createAt:{
        type: Date,
        default: Date.now()
    },
    updateAt:{
        type: Date,
        required: false
    }
})

mongoose.model('videos', Videos)