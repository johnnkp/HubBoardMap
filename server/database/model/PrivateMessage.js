const mongoose = require('mongoose');

// Define the PrivateMassageSchema schema
const PrivateMassageSchema = new mongoose.Schema({
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    message: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }]
});


module.exports = mongoose.model('PrivateMassage', PrivateMassageSchema);