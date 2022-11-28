const express = require('express')

const {getCards, postCard, deleteCard} = require('../controllers/cardController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// IN PLACE TO REQUIRE AUTH FOR ALL ROUTES
router.use(requireAuth)

// GET ALL CARDS IN COLLECTION
router.get('/', getCards)

router.post('/', postCard)

router.delete('/:id', deleteCard)

module.exports = router