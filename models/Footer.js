const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Footer = new Schema({
    title: {
        type: String,
        require: true
    },
    linkhome:{
        type: String,
        require: true
    },
    linkSobre:{
        type: String,
        require: true
    },
    linkContato:{
        type: String,
        require: true
    },
    titleContact: {
        type: String,
        require: true
    },
    contactOne:{
        type: String,
        require: true
    },
    linkcontactone:{
        type: String,
        require: true
    },
    contactTow:{
        type: String,
        require: true
    },
    linkcontacttow:{
        type: String,
        require: true
    },
    contactThree:{
        type: String,
        require: true
    },
    titleFollow:{
        type: String,
        require: true
    },
    followOne:{
        type: String,
        require: true
    },
    followTow:{
        type: String,
        require: true
    },
    followThree:{
        type: String,
        require: true
    },
    followFor:{
        type: String,
        require: true
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
mongoose.model('footer', Footer)