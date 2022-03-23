const mongoose = require('mongoose');

// Define the Todolist schema
const TodolistSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: String,
    checkboxes: [{
        active: Boolean,
        content: String
    }],
    active: {
        type: Boolean,
        default: true
    },
    createTime : {
        type: Date,
        default: Date.now
    },
    contributors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
})


module.exports = mongoose.model('Todolist', TodolistSchema);