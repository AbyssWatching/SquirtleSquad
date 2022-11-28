const Card = require('../models/cardModel')
const mongoose = require('mongoose')

// GET ALL CARDS IN COLLECTION
const getCards = async (req, res) => {
    const user_id = req.user.id
  
    const cards = await Card.find({user_id}).sort({createdAt: -1})
  
    res.status(200).json(cards)
  }
// ADD NEW CARD TO COLLECTION
const postCard = async (req, res) => {
    const {id, name, type1, type2, weight, height, image} = req.body

    try {
        const user_id = req.user.id
        const card = await Card.create({id, name, type1, type2, weight, height, image, user_id})
        res.status(200).json(card)
    } catch (err) {
        res.status(400).json({err: err.message})
    }
}


module.exports = {getCards, postCard}