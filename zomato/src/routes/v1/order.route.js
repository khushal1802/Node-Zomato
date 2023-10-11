const express = require("express");
const { orderValidation } = require("../../validations");
const { orderController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();
// Create order
router.post(
  "/create-order",
  validate(orderValidation.createOrder),
  orderController.createOrder
);

// List order
router.get(
  "/list",
  orderController.getOrderList
);

// Update order
router.put(
  "/update-order/:id",
  orderController.updateOrder
);

// Delete order
router.delete(
  "/delete-order/:Id",
  orderController.deleteOrder
);

module.exports = router;
