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
        isChecked: {
            type: Boolean,
            default: false
        },
        content: String
    }],
    isActive: {
        type: Boolean,
        default: true
    },
    createTime : {
        type: Date,
        default: Date.now
    },
    lastUpdateTime : {
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

// Update the lastUpdateTime before the Todolist is saved
TodolistSchema.pre('save', function(next) {
    this.lastUpdateTime = Date.now();
    next();
});

TodolistSchema.methods.isOwner = function(userId){
    return this.owner.equals(userId);
}

TodolistSchema.methods.isOwnerOrContributor = function(userId){
    return this.owner.equals(userId) || this.contributors.some(contributor=>{contributor.equals(userId)});
}

module.exports = mongoose.model('Todolist', TodolistSchema);