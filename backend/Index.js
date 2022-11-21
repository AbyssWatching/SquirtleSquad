
// DEPENDENCIES
const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize')


//CONFIG
//DEPENDENCIES
const app = express()
require('dotenv').config()
app.use(express.json())

app.use(cors());
app.use(express.json())

// DB CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)
async function run (){
    try {
        await sequelize.authenticate();
        console.log('This is no Zaku boi, I am a coding GOD, and the connection worked');
    } catch (error) {
        console.error('You done messed up', error);
    }
}
run()
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
const port = process.env.PORT;
app.listen(process.env.PORT, () => {
    console.log(`Catching them on port: ${port}`)
    
})
