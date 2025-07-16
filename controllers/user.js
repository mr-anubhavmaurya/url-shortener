const User = require("../models/users");

async function userSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.redirect("/");
}
async function userLogin(req,res){
  const {email,password} = req.body;
  const user = await User.findOne({email,password});
  if(!user){
    return res.render("login", {
      error: "Invalid Email or Password"
    });
  }
  return res.redirect("/");
}
module.exports = {
  userSignup,
  userLogin
};
