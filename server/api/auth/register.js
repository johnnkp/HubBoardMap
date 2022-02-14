const router = require('express').Router();
const User = require('../../database/model/User');
const mailer = require('../../lib/mailer');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
require('dotenv').config();

/**
 * @api {post} /api/auth/register User registration
 * @apiName Register
 * @apiGroup Auth
 *
 * @apiBody {String} username Username
 * @apiBody {String} email Email
 * @apiBody {String} password Password
 *
 * @apiSuccess (202) {String} message Success message
 *
 * @apiError (409) {String} attribute_used_message Username or email already used
 * @apiError (500) {String} internal_error Internal server error
 */

router.post('/', (req, res) => {
  const { username, email, password } = req.body;

  // TODO: Check if username or email is valid

  // Check if username or email is used
  User.findOne({$or:[{username: username}, {email: email}]})
      .then(result =>{
            // If username or email is used
            if (result){
              if (result.username === username){
                res.status(409).send("Username already used");
              }
              else {
                res.status(409).send("Email already used");
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
                        res.status(202).send("Verification email sent");
                      })
                  // Catch error when creating user
                  .catch(err =>{
                      console.log(err);
                      res.status(500).send('Internal server error');
                  });

            }
          })
      // Catch error when finding user
      .catch(err =>{
          console.log(err);
          res.status(500).send('Internal server error');
      });
});

module.exports = router;