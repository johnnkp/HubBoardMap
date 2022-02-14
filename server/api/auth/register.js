const router = require('express').Router();
const User = require('../../database/model/User');
const mailer = require('../../lib/mailer');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
require('dotenv').config();


router.post('/', (req, res) => {
  const { username, email, password } = req.body;

  // TODO: Check if username or email is valid

  // Check if username or email is used
  User.findOne({$or:[{username: username}, {email: email}]})
      .then(result =>{
            // If username or email is used
            if (result){
              if (result.username === username){
                res.status(409).json({
                  message: 'Username is already used'
                });
              }
              else {
                res.status(409).json({
                  message: 'Email is already used'
                });
              }
            }
            // If username or email is not used
            else {
              const verificationToken = crypto.randomBytes(20).toString('hex');
              User.create({
                username: username,
                email: email,
                password: bcrypt.hashSync(password, Number(process.env.SALT)),
                verificationToken: verificationToken
              })
                  .then(() =>{
                        mailer.sendVerificationEmail(email, verificationToken);
                        res.status(202).json({
                          message: 'Verification email sent'
                        });
                      })
                  // Catch error when creating user
                  .catch(err =>{
                      console.log(err);
                      res.status(500).json({
                          message: 'Internal server error'
                    });
                  });

            }
          })
      // Catch error when finding user
      .catch(err =>{
          console.log(err);
          res.status(500).json({
              message: 'Internal server error'
        });
      });
});

module.exports = router;