//Things required for express
const express = require(`express`);

//allows using our dotenv file
require('dotenv').config();

const app = express();
const port = process.env.PORT;


//home page
app.get("/ ", (req, res) => {
    res.write("home")
})

//all other pages are 404
app.get('*', (req, res) => {
    
    res.write("error404")
   
})

//Listen
//app.listen(process.env.PORT)

app.listen(port, ()=> {
    console.log(`Server is running on ${port}`);
})