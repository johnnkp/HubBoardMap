const router = require('express').Router();
const passport = require('passport');
require('dotenv').config();

const CLIENT_ADDRESS = process.env.SERVER_ADDRESS + ':' + process.env.CLIENT_PORT;
router.post('/',(req,res)=> {
    passport.authenticate('google', {
        scope: ['profile', 'email']
    },(err,user)=> {
        if(err) {
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        if(!user) {
            return res.status(401).json({
                message: 'User not found'
            });
        }
        req.login(user,(err)=> {
            if(err) {
                console.error(err);
                return res.status(500).json({
                    message: 'Something went wrong'
                });
            }
            return res.status(200).json(req.user);
        });
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
            res.session.googldID = info.profile.id;
            return res.redirect(CLIENT_ADDRESS + '/register');
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