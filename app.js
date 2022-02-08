const express = require('express')
const app = express()

app.use(express.static('./client/build'))

const PORT = process.env.PORT || 3001
const server = app.listen(PORT);
console.log("Server is listening to port", PORT)