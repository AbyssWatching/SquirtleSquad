// DEPENDENCIES
require('dotenv').config()
const { Router } = require('express')
const express = require('express')
const cards = express.Router()

// INDEX
cards.get('/', (req, res) => {
    res.json({mssg: 'GET all cards'})
})


