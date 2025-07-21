const jwt = require("jsonwebtoken");
const secret =
  "2ec155d323c373fb9f2f7263b7891ecf079634dd60bfa906b38417682f8c053f";
function setUser(user) {
  const payload = {
    _id: user._id,
    email: user.email,
  };
  return jwt.sign(payload, secret);
}

function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};
