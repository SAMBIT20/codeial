const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/user");

//authentication Using Passport
passport.use(
  new LocalStrategy(
    {
      usernameFileld: "email",
    },
    {
      function(email, password, done) {
        //Find the user and establish a identity
        User.findOne({ email: email }, (err, user) => {
          if (err) {
            console.log("Error in find user =======> Passport");
            return done(err);
          }
          if (!user || user.password != password) {
            console.log("Invalid UserName/Password");
            return done(null, flase);
          }
          return done(null, user);
        });
      },
    }
  )
);

//serializing the user to decide which key is to be kept in the  cookies
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//deserializing the user from the key in the cookie
passport.deserializeUser((id, done) => {
  User.findById(id, function (err, user) {
    if (err) {
      console.log("Error in find user =======> Passport");
      return done(err);
    }

    return done(null, user);
  });
});

module.exports = passport;
