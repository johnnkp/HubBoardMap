const express = require('express')
const app = express()
const database = require('./server/database')
const passport = require('./server/lib/passport')
const session = require('express-session')
require('dotenv').config()

// Connect to database
database.connect()

// Session and passport initialization
app.use(session({
    secret : process.env.SESSION_SECRET,
    resave : false,
    saveUninitialized : false
}))
passport.init()

// Api routing
app.use('/api', require('./server/api'))

const PORT = process.env.PORT || 3001
app.listen(PORT);
console.log("Server is listening to port", PORT)