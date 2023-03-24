const mongoose = require('mongoose');

// model a todo entity in this application
const todoSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    owner: {
        type: mongoose.ObjectId,
        required: true
    }
});

mongoose.model('Todo', todoSchema);