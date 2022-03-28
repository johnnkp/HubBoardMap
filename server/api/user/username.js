/**
 * @api {get} /api/user/username Get username of current user
 * @apiName GetUsername
 * @apiGroup User
 *
 * @apiSuccess {Boolean} success true
 * @apiSuccess {String} username Username of current user.
 *
 * @apiError {Boolean} success false
 * @apiError {String} error Error message.
 */

const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        username: req.user.username
    });
});

module.exports = router;