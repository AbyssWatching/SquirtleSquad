// DEPENDENCIES
require('dotenv').config()
const { Router } = require('express')
const express = require('express')
const cards = express.Router()
const db = require('../models')
const { Cards } = db

// INDEX
cards.get('/', (req, res) => {
    res.json({mssg: 'GET all cards'})
})

// POST, ideally this the route that gets used when the "Gatcha" is rolled
cards.post('/', async (req, res) => {
    try {
        const newCard = await Cards.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new card',
            data: newCard
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE a card from the collection
cards.post('/:id', (req, res) => {
    res.json({mssg: 'DELETE a card'})
})

// UPDATE a cards rating? The user can update how much they value a card specifically
cards.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a card'})
})

module.exports = cards
