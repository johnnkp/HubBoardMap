const router = require('express').Router();
const passport = require('passport');
require('dotenv').config();

const CLIENT_ADDRESS = process.env.SERVER_HOST + ':' + process.env.CLIENT_PORT;
router.get('/',(req,res)=> {
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })(req,res);
});

// TODO: redirect to client
router.get('/callback',(req,res)=> {
    passport.authenticate('google', {
        failureRedirect: CLIENT_ADDRESS + '/login',
    },(err,user,info)=> {
        if(err) {
            console.error(err);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        if(!user) {
            return res.json(info)
            //return res.send(CLIENT_ADDRESS + '/register');
        }
        req.login(user,(err)=> {
            if(err) {
                console.error(err);
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            }
            // TODO: redirect to client when user exists
            return res.redirect(CLIENT_ADDRESS + '/user');
        });
    })(req,res);
});

module.exports = router;