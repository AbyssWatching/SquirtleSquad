const Card = require('../models/cardModel')
const mongoose = require('mongoose')

// GET ALL CARDS IN COLLECTION
const getCards = async (req, res) => { //find all cards belonging to the account's user id
    const user_id = req.user.id
    const cards = await Card.find({user_id}).sort({createdAt: -1}) //-1 is just descending order
  
    res.status(200).json(cards) //json send cards back to the client
  }

// ADD NEW CARD TO COLLECTION

const postCard = async (req, res) => {
    const {id, name, type1, type2, weight, height, image} = req.body //request the variables coming in from the gacha system
    try {
        const user_id = req.user.id //define user id to attach to the card model
        const favorite = false
        const card = await Card.create({id, name, type1, type2, weight, height, image, user_id, favorite}) //Create the card in the db
        res.status(200).json(card) //then send the response back to the client
    } catch (err) {
        res.status(400).json({err: err.message})
    }
}

// DELETE A CARD
const deleteCard = async (req, res) => {
    
    
    const { id }  = req.params //Unique card id

     if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Hit here'})
     }

    const card = await Card.findOneAndDelete({_id: id}) //find the card by unique id

    if (!card) {
        return res.status(400).json({error: 'No such card exists'})
    }

    res.status(200).json(card)
}

// UPDATE CARD FAVORITE
const favoriteCard = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Hit here'})
     }

     const card = await Card.findByIdAndUpdate({_id: id}, {
        ...req.body
     })

     if (!card) {
        return res.status(400).json({error: 'No such card exists'})
     }
    
     res.status(200).json(card)
}


module.exports = {getCards, postCard, deleteCard, favoriteCard} //export these functions to our routes