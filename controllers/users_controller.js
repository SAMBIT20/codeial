module.exports.profile = (req, res) => {
  return res.render("user_profile", {
    title: "Profile",
  });
};

module.exports.signUp = (req, res) => {
  return res.render("user_sign_up", {
    title: "Codial | Sign Up",
  });
};

module.exports.signIn = (req, res) => {
  return res.render("user_sign_in", {
    title: "Codial | Sign In",
  });
};

//Get the sign up data

module.exports.create = (req, res) => {
  //ToDO Later
};

//signIN and create a session for the User
module.exports.createSession = (req, res) => {
  //Todo later
};
