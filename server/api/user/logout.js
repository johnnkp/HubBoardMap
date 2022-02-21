/**
 * @api {post} /api/user/logout Logout
 * @apiName Logout
 * @apiGroup User
 *
 * @apiSuccess {Boolean} success true.
 * @apiSuccess {String} message Success message
 *
 * @apiError (401) {String} message "Unauthorized".
 */

const router = require('express').Router();

router.post('/',(req, res) => {
    req.logout();
    res.send({
        success: true,
        message: 'Logged out successfully'
    });
});

module.exports = router;