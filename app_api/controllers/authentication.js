const mongoose = require('mongoose');
const User = mongoose.model('User');

async function register(req, res) {
    const user = new User({ userID: req.body.userId,
                            password: req.body.password});
    try {
        const savedUser = await user.save();
    } catch (error) {
        return res.status(400)
                    .json(error);
    }
    res.status(200)
        .json({});
}

async function login(req, res) {

}

async function logout(req, res) {

}

module.exports = {
    register,
    login,
    logout
};