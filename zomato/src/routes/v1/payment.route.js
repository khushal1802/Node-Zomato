const express = require("express");
const { paymentValidation } = require("../../validations");
const { paymentController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// Create payment
router.post(
  "/create-payment",
  validate(paymentValidation.createPayment),
  paymentController.createPayment
);

// List payment
router.get(
  "/list",
  paymentController.getPaymentList
);

// Update payment
router.put(
  "/update-payment/:id",
  paymentController.updatePayment
);

// Delete payment
router.delete(
  "/delete-payment/:Id",
  paymentController.deletePayment
);

module.exports = router;
