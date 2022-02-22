const mongoose = require('mongoose');

// Define the User schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required : true,
        unique : true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: String,
    profilePhoto: String,
    googleId: String
})

module.exports = mongoose.model('User', UserSchema);