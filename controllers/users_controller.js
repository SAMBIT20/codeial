const User = require("../models/user");

module.exports.profile = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    return res.render("user_profile", {
      title: "Profile",
      profile_user: user,
    });
  });
};

//render the sign up page
module.exports.signUp = (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect("/users/profile");
  }

  return res.render("user_sign_up", {
    title: "Codial | Sign Up",
  });
};

module.exports.signIn = (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect("/users/profile");
  }
  return res.render("user_sign_in", {
    title: "Codial | Sign In",
  });
};

//Get the sign up data
module.exports.create = function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("error in finding user in signing up");
      return;
    }

    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("error in creating user while signing up");
          return;
        }

        return res.redirect("/users/sign-in");
      });
    } else {
      return res.redirect("back");
    }
  });
};

//signIN and create a session for the User
module.exports.createSession = (req, res) => {
  return res.redirect("/");
};

module.exports.distorySession = (req, res) => {
  req.logout();
  return res.redirect("/");
};
