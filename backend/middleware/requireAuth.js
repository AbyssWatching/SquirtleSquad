const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const ObjectId = require('mongoose').Types.ObjectId

const requireAuth = async (req, res, next) => {
    // CHECK IF USER IS AUTHENTICATED
    const { authorization } = req.headers //this grabs the authorization where our token is sent header from req.headers

    if(!authorization) { //check if token exists in Authorization header
        return res.status(401).json({error: 'Authorization token required'})
    }

    const token = authorization.split(' ')[1]; //splits our token string after a space so Bearer | jwt token

    try {
        const id  = new ObjectId(jwt.verify(token, process.env.SECRET)) //verify token with our secret //and if okay grabs id from payload
        req.user = await User.findOne(id).select('id') //grabs the intended user

        next() //fire next appropriate function in our controller
    } catch (err) {
        res.status(401).json({error: 'Unauthorized request'})
    }
}

module.exports = requireAuth
