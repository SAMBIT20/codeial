module.exports.profile = (req, res) => {
  return res.render("user_profile", {
    title: "Profile",
  });
};
module.exports.post = (req, res) => {
  return res.end("<h1>User Post Love</h1>");
};
