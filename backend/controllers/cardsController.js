// DEPENDENCIES
require('dotenv').config()
const { Router } = require('express')
const express = require('express')
const cards = express.Router()
const db = require('../models')
const { Cards } = db
const { Op } = require('sequelize')

// INDEX
cards.get('/', async (req, res) => {
    try {
        const allCards = await Cards.findAll({
            order: [ [ 'poke_id', 'ASC' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(allCards)
    } catch (error) {
        res.status(500).json(error)
    }
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
