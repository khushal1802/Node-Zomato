const exprss = require("express");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");
const { tokenValidation } = require("../../validations");
const { tokenController } = require("../../controllers");

const router = exprss.Router();

/** Create token */
router.post(
  "/create-token",
  validate(tokenValidation.generateToken),
  tokenController.generateToken
);

/** Verify token */
router.get("/verify-token", auth(), tokenController.verifyToken);

module.exports = router;