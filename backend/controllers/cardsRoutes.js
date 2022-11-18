// DEPENDENCIES
require('dotenv').config()
const { Router } = require('express')
const express = require('express')
const cards = express.Router()

// INDEX
cards.get('/', (req, res) => {
    res.json({mssg: 'GET all cards'})
})

// POST, ideally this the route that gets used when the "Gatcha" is rolled
cards.post('/', (req, res) => {
    res.json({mssg: 'POST a new card'})
})

// DELETE a card from the collection
cards.post('/:id', (req, res) => {
    res.json({mssg: 'DELETE a card'})
})

