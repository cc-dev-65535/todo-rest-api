const passport = require('passport');
const LocalStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('User');

passport.use(new LocalStrategy (
    async function(username, password, callback) {
        let user = false;
        try {
            user = await User.findOne({ userID: username }).exec();
        }
        catch (error) {
            return callback(error, false); 
        }
        if (!user) { 
            return callback(null, false); 
        }
        if (!user.validatePassword(password)) {
            return callback(null, false);
        }
        return callback(null, user);
    }
));


let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
passport.use(new JwtStrategy(opts, 
    async function(jwt_payload, callback) {
        let user = false;
        try {
            user = await User.findOne({id: jwt_payload.sub}).exec();
        } catch (error) {
            return callback(error, false);
        }
        if (user) {
            return callback(null, user);
        } else {
            return callback(null, false);
        }
    })
);
