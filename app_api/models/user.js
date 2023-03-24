const mongoose = require('mongoose');

// model a user entity in this application
const userSchema = new mongoose.Schema({
    userID: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

mongoose.model('User', userSchema);