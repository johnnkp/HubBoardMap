/**
 * @api {post} /api/auth/login Login
 * @apiName Login
 * @apiGroup Auth
 *
 * @apiDescription API for login operation.
 * Return cookie if success.
 *
 * @apiBody {String} username Username
 * @apiBody {String} password Password
 *
 * @apiSuccess (200) {Boolean} success True
 * @apiSuccess (200) {String} message Success message
 *
 * @apiError (400) {Boolean} success False
 * @apiError (400) {String} message Error message
 *
 * @apiError (500) {Boolean} success False
 * @apiError (500) {String} message Internal server error
 */

const router = require('express').Router();
const passport = require('passport');


router.post('/', (req, res) => {
    const {username, password} = req.body
    if (!username || !password) {
        return res.status(400).json({
            message: 'Please fill out all fields'
        })
    }
    // Using local strategy for authentication
    passport.authenticate('local',
        {
            session: true
        },
        (err, user, info) => {
            // Handle error during authentication
            if (err) {
                console.error(err)
                return res.status(500).json({
                    success: false,
                    message: 'Internal Server Error'
                })
            }
            // Case: Incorrect username or password
            if (!user) {
                return res.status(400).json({
                    success: false,
                    message: info.message
                })
            }
            // Case: Success
            req.login(user, (err) => {
                if (err) {
                    console.error(err)
                    return res.status(500).json({
                        success: false,
                        message: 'Internal Server Error'
                    })
                }
                return res.status(200).json({
                    success: true,
                    message: 'Login successful'
                })
            })
        })(req, res)
})


module.exports = router;