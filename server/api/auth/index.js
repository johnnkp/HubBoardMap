const router = require('express').Router();

// /api/auth requests
router.use('/register', require('./register'));

module.exports = router;