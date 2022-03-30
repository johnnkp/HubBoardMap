const mongoose = require('mongoose');
const Todolist = require('./');
// Define the Comment schema
const CommentSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    }
});

// Method to add a comment to a todolist
CommentSchema.statics.addComment = function(todolistId, senderId, content) {
    return new Promise((resolve,reject)=>{
        this.create({
            sender:senderId,
            content:content
        })
            .then(comment=>{
                Todolist.findByIdAndUpdate(todolistId,{$push:{comments:comment._id}}, {new: true})
                    .then(todolist=>{
                        resolve({comment:comment, todolist:todolist});
                    })
                    .catch(err=>{
                        reject(err);
                    })
            })
            .catch(reject)
    })
};

module.exports = mongoose.model('Comment', CommentSchema);