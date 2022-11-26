//DEPENDENCIES
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cardsRoutes = require('./routes/cards')
const userRoutes = require('./routes/user')

// BUILD EXPRESS APP
const app = express()

// MIDDLEWARE
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// ROUTES
app.use('/api/cards', cardsRoutes)
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
