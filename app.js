const express = require('express')
const app = express()
const database = require('./server/database')

// Connect to database
database.connect()

// Set api route
app.use('/api', require('./server/api'))

const PORT = process.env.PORT || 3001
const server = app.listen(PORT);
console.log("Server is listening to port", PORT)