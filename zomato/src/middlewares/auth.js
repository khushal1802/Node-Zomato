const jwt = require("jsonwebtoken");
const { User } = require("../models");
const config = require("../config/config");

const auth = (token, roles) => async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return next(
        res.status(401).json({
          status: 401,
          message: "Please authenticate..!",
        })
      );
      }

      //check role
    jwt.verify(token, config.jwt.secret_key, (err, decoded) => {
      console.log(roles, "roles");
      if (err || !roles.find((ele) => ele === decoded.role)) {
        console.log(decoded.role, "decoded.role");
        console.log("=====err=====", err);
        throw Error("You dont have permission");
      }
    });

    const decode = jwt.verify(
      token.replace("Bearer ", ""),
      config.jwt.secret_key
    );

    if (!decode) {
      return next(new Error("Please enter valid token..!"));
    }

    const user = await User.findOne({ _id: decode.user });
    if (!user) {
      return next(new Error("Please  authenticate...!"));
    }

    req.user = user;
    next();
  } catch (error) {
    return next(new Error(error));
  }
};

module.exports = auth;
