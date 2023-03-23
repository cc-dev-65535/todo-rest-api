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
    }
});

mongoose.model('Todo', todoSchema);