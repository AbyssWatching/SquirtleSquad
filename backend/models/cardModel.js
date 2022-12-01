const mongoose = require('mongoose');

const Schema = mongoose.Schema //function to create a new Schema

const cardSchema = new Schema({ //then create the Schema
    id: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        required: true
    },
    type1: {
        type: String,
        required: true
    },
    type2: {
        type: String,
        required: false
    },
    weight: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    favorite: {
        type: Boolean,
        default: false,
        require: false
    }


})

module.exports = mongoose.model('Card', cardSchema)