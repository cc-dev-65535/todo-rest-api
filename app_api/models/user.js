const mongoose = require('mongoose');
const crypto = require('crypto');

// model a user entity in this application
const userSchema = new mongoose.Schema({
    userID: {
        type: String,
        unique: true,
        required: true
    },
    hash: String,
    salt: String
});

// create and store hash and salt for supplied user password
userSchema.methods.createPassword = function(password) {
    this.salt = crypto.randomBytes(32).toString('base64');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
}

// validate the supplied password in an API request
userSchema.methods.validate = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
    return this.hash === hash;
} 

mongoose.model('User', userSchema);