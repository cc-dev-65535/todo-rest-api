const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

// register a new user and password into the users database
async function register(req, res) {
    if (!req.body.username || !req.body.password) {
        return res.status(400)
                    .json({ "error": "missing fields" });
    }

    const user = new User({ userID: req.body.username });
    user.createPassword(req.body.password);
    let savedUser;
    try {
        savedUser = await user.save();
    } catch (error) {
        return res.status(400)
                    .json(error);
    }
    res.status(200)
        .json({ "success": "user account created" });
}

// handle a user login request
async function login(req, res) {
    if (!req.body.username || !req.body.password) {
        return res.status(400)
                    .json({ "error": "missing fields" });
    }
    
    (passport.authenticate('local', (error, user) => {
        if (error) {
            return res.status(400)
                        .json(error);
        }
        if (user) {
            const token = user.createJwt();
            return res.status(200)
                        .json({ "token": token });
        }
        return res.status(404)
                    .json({ "error" : "authentication unsuccessful" });
    }))(req, res);
}

module.exports = {
    register,
    login
};