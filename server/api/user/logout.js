const router = require('express').Router();

router.post('/',(req, res) => {
    req.logout();
    res.send({
        success: true,
        message: 'Logged out successfully'
    });
});

module.exports = router;