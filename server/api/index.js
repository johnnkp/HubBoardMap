const express = require("express");
const router = require('express').Router();

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

// Import the routes
router.use('/auth', require('./auth'));

module.exports = router;