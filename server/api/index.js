const express = require("express");
const router = require('express').Router();
require('dotenv').config();
const {ensureAuthenticated} = require('../lib/passport');

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

// Import the routes
router.use('/auth', require('./auth'));
router.use('/user', ensureAuthenticated, require('./user'));
module.exports = router;