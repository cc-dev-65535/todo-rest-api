const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

// register a new user and password into the users database
async function register(req, res) {
    if (!req.body.username || !req.body.password) {
        return res.status(400)
                    .json({"message": "missing fields"});
    }

    const user = new User({ userID: req.body.username });
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
    if (!req.body.username || !req.body.password) {
        return res.status(400)
                    .json({"message": "missing fields"});
    }
    
    (passport.authenticate('local', (err, user, msg) => {
        if (err) {
            return res.status(400)
                        .json(err);
        }
        if (user) {
            const token = user.createJwt();
            return res.status(200)
                        .json({token});
        }
        return res.status(400)
                    .json(err);
    }))(req, res);
}

// handle a user logout request
async function logout(req, res) {

}

module.exports = {
    register,
    login,
    logout
};