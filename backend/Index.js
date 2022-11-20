
// DEPENDENCIES
const express = require('express');
const moongoose = require ('mongoose');
const cors = require('cors');

//CONFIG
const app = express()
require('dotenv').config()
app.use(express.json())

app.use(cors());
app.use(express.json())

//BD stuff connecting uh I see the light!
const uri = process.env.ATLAS_URI;
moongoose.connect(uri);


const connection = moongoose.connection;
connection.once('open', ()=> {
    console.log(`YOU SEE THIS THE DB Connectem "`);
})


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