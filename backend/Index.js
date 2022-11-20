
// DEPENDENCIES
const express = require('express')
const app = express()

//CONFIG
require('dotenv').config()
app.use(express.json())

const port = process.env.PORT;

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to PokeCha'
    })
})

// CONTROLLERS
const cardsController = require('./controllers/cardsController')
app.use('/cards', cardsController)


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Catching them on port: ${port}`)
})