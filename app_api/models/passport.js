const passport = require('passport');
const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');
const User = mongoose.model('User');

passport.use(new LocalStrategy (
    async function(username, password, done) {
        let user = false;
        try {
            user = await User.findOne({ userID: username }).exec();
        }
        catch (err) {
            return done(err); 
        }
        if (!user) { 
            return done(null, false); 
        }
        if (!user.validatePassword(password)) {
            return done(null, false);
        }
        return done(null, user);
    }
));
