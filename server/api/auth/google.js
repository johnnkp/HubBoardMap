const router = require('express').Router();
const passport = require('passport');

router.get('/',(req,res)=> {
    passport.authenticate('google', {
        scope: ['profile', 'email']
    },(err,user,info)=> {
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

router.get('/callback',(req,res)=> {
    passport.authenticate('google', {
        failureRedirect: '/login'
    },(err,user,info)=> {
        if(err) {
            console.error(err);
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
                    message: 'Internal Server Error'
                });
            }
            return res.status(200).json(req.user);
        });
    })(req,res);
});

module.exports = router;