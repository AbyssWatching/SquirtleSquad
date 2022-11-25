const mongoose = require('mongoose');

const Schema = mongoose.Schema

const cardSchema = new Schema({
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
    }


})