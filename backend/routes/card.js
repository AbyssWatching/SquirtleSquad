const express = require('express')

const {getCards} = require('../controllers/cardController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)