const express = require("express");
const validate = require("../../middlewares/validate");
const { cartValidation } = require("../../validations");
const { cartController } = require("../../controllers");

const router = express.Router();

// create cart
router.post(
  "/create-cart",
  validate(cartValidation.createCart),
  cartController.createCart
);

//cart list
router.get("/list", cartController.getCartList);

//cart update
router.put(
  "/update-cart/:cartId",
  cartController.updateCart
);

//cart delete
router.delete("/delete-cart/:cartId", cartController.deleteCart);

module.exports = router;
