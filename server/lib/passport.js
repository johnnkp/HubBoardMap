const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../database/model/User')
const passport = require('passport');
const bcrypt = require('bcryptjs');
require('dotenv').config();

module.exports.init = () => {
    // Use local strategy
    passport.use('local', new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
        },
        (username, password, done) => {
            User.findOne({username: username})
                .then(user => {
                    if (user) {
                        if (bcrypt.compareSync(password, user.password)) {
                            if (user.isEmailVerified) {
                                return done(null, user);
                            } else {
                                return done(null, false, {message: 'Please verify your email first'});
                            }
                        } else {
                            return done(null, false, {message: 'Incorrect password'})
                        }
                    } else {
                        return done(null, false, {message: 'User not found'})
                    }
                })
                .catch(err => {
                    return done(err)
                })
        }
    ))

    // Use google strategy
    const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, SERVER_HOST ,SERVER_PORT } = process.env;
    passport.use('google', new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: SERVER_HOST + ':' + SERVER_PORT + '/api/auth/google/callback',
    },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({googleId: profile.id})
                .then(user => {
                    if (user) {
                        return done(null, user)
                    } else {
                        return done(null, false, {message: 'User not found'})
                    }
                })
                .catch(err => {
                    return done(err)
                })
    }
    ))

    // Serialize user
    passport.serializeUser((user, done) => {
        done(null, user.username)
    })

    // Deserialize user
    passport.deserializeUser((username,done) =>{
        User.findOne({username: username})
            .then(user => {
                return done(null, user)
            })
            .catch(err => {
                return done(err)
            })
    })
}

module.exports.ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    } else {
        res.status(401).send({message: 'Unauthorized'})
    }
}
