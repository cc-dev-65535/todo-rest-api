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
// jwt should be set in Authorization HTTP header with Bearer scheme
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
passport.use(new JwtStrategy(opts, 
    async function(jwtPayload, callback) {
        let user = false;
        try {
            console.log(jwtPayload);
            user = await User.findOne({ userID: jwtPayload.sub }).exec();
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
