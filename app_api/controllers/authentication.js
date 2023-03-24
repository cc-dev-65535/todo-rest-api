const mongoose = require('mongoose');
const User = mongoose.model('User');

// register a new user and password into the users database
async function register(req, res) {
    if (!req.body.userID || !req.body.password) {
        return res.status(400)
                    .json({"message": "missing fields"});
    }

    const user = new User({ userID: req.body.userID });
    user.createPassword(req.body.password);
    try {
        const savedUser = await user.save();
    } catch (error) {
        return res.status(400)
                    .json(error);
    }
    res.status(200)
        .json({"message": "user account created"});
}

// handle a user login request
async function login(req, res) {

}

// handle a user logout request
async function logout(req, res) {

}

module.exports = {
    register,
    login,
    logout
};