const User = require("../models/users");
const {setUser} = require("../service/auth")


async function userSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.render("login");
}
async function userLogin(req,res){
  const {email,password} = req.body;
  const user = await User.findOne({email,password});
  if(!user){
    return res.render("login", {
      error: "Invalid Email or Password"
    });
  }
  const token = setUser(user);
  res.cookie("uid", token);
  return res.redirect("/");
}
module.exports = {
  userSignup,
  userLogin
};
