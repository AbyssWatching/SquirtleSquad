//DEPENDENCIES
require('dotenv').config() //Attach env variables
const cors = require('cors')

const express = require('express')
const mongoose = require('mongoose')
const cardsRoutes = require('./routes/cards')
const userRoutes = require('./routes/user')

// BUILD EXPRESS APP
const app = express()

// MIDDLEWARE
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
  next() //Fire next to move to the next bit of middleware
})

// ROUTES
app.use('/api/cards', cardsRoutes) // Our API routes
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('Connected to DB & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
