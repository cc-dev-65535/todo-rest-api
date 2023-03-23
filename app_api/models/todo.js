const mongoose = require('mongoose');

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
    }
});

const todo = mongoose.model('Todo', todoSchema);