const express = require("express");
const bodyParser = require("body-parser");
const router = require('express').Router();
const User = require("../database/model/User");

router.use(express.json())
router.use(bodyParser.urlencoded({ extended: true }))

// Import the routes
router.use('/auth', require('./auth'));
router.get('/test', (req, res) => {
    User.create({
        username: "test",
        password: "test",
        email: "test",
        isAdmin: false
    }, err=>{
        if(err) console.log(err)
        res.send("test")
    })
})
module.exports = router;