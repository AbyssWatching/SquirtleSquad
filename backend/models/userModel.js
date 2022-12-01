const mongoose = require('mongoose')
const bcrypt = require('bcrypt') //hashing function
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})


// sign up method with validation
userSchema.statics.signup = async function(email, password) {

    // VALIDATE
    if (!email || !password) { //Ensure the user filled out sign up request
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) { //validate the email is actually an email
        throw Error('Email not valid')
    }
    if (!validator.isStrongPassword(password)) { //validate password strength, it's set to default
        throw Error('Password not strong enough')
    }

    const exists = await this.findOne({ email }) //when using Static methods instead of User.findOne it can be this.findOne instead in our case we look for the email theu are signing up with

    if (exists) { //if exist throw error
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10) //generate salt, default is 10, adds a random string next to a password ex mypasswordn1ni13i51w
    const hash = await bcrypt.hash(password, salt) //then hash a password and the salt value we generated

    const user = await this.create({ email, password: hash }) //then create the email and hashed password in the db

    return user  //return the user
}

//login method
userSchema.statics.login = async function(email, password) {

    if (!email || !password) {
      throw Error('All fields must be filled')
    }
  
    const user = await this.findOne({ email })
    if (!user) { //if email wrong throw error
      throw Error('Incorrect email')
    }
  
    const match = await bcrypt.compare(password, user.password) //compare the password the user submitted and the one in the database
    if (!match) {
      throw Error('Incorrect password')
    }
  
    return user
}


module.exports = mongoose.model('User', userSchema)