//Things required for express
const express = require(`express`);
const app = exoress();

//
//app.use("/", require("./controllers/"))

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

app.listen(PORT)