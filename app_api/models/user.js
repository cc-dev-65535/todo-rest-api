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

// validate the supplied password in an API request
userSchema.methods.validate = function(password) {
    return this.password === password;
} 

mongoose.model('User', userSchema);