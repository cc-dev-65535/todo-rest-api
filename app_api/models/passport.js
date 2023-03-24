const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');

passport.use(new Strategy (
    function(username, password, done) {
      User.findOne({ userID: username }, function (err, user) {
        if (err) { 
            return done(err); 
        }
        if (!user) { 
            return done(null, false); 
        }
        if (!user.validatePassword(password)) { 
            return done(null, false); 
        }
        return done(null, user);
      });
    }
));
