const mongoose = require('mongoose');

// Define the Notification schema
const NotificationSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
})


module.exports = mongoose.model('Notification', NotificationSchema);