const LocalStrategy = require('passport-local').Strategy;
const User = require('../database/model/User')
const passport = require('passport');
const bcrypt = require('bcryptjs');

module.exports.init = () => {
    // Use local strategy
    passport.use('local', new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
        },
        (username, password, done) => {
            User.findOne({username: username})
                .then(user => {
                    if (user) {
                        if (bcrypt.compareSync(password, user.password)) {
                            return done(null, user)
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

