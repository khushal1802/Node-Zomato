const { tokenService } = require("../services");

// create token
const generateToken = async (req, res) => {
    try {
        const reqBody = req.reqBody;
        reqBody.expire_time = moment().add(10, "minites");

        const token = await tokenService.generateToken(reqBody);
        reqBody.token = token;
        const saveToken = await tokenService.saveToken(reqBody);

        res.status(200).json({
          success: true,
          message: "Token created.....!",
          data:{saveToken}
        });
    } catch (error) {
        res.status(400).json({
          success: false,
          message: error.message || "Something went wrong...!",
        });
    }
}

// verify token
const verifyToken = async (req, res) => {
    res.status(200).json({
      success: true,
        message: "Token successfully verified....!",
      data:req.user,
    });
}
module.exports = {
    generateToken,
    verifyToken,
};