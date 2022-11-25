const Card = require('../models/cardModel')
const mongoose = require('mongoose')

// GET ALL CARDS IN COLLECTION
const getCards = async (req, res) => {
    const user_id = req.user._id
  
    const cards = await Card.find({user_id}).sort({createdAt: -1})
  
    res.status(200).json(cards)
  }
//