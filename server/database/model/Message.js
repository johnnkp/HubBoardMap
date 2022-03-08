const mongoose = require('mongoose');

// Define the Message schema
const MessageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model('Message', MessageSchema);