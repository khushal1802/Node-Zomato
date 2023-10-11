const express = require("express");
const validate = require("../../middlewares/validate");
const { deliveryValidation } = require("../../validations");
const { deliveryController } = require("../../controllers");

const router = express.Router();

// create delivery
router.post(
  "/create-delivery",
  validate(deliveryValidation.createDelivery),
  deliveryController.createDelivery
);

//delivery list
router.get("/list", deliveryController.getDeliveryList);

//delivery update
router.put("/update-delivery/:deliveryId", deliveryController.updateDelivery);

//delivery delete
router.delete("/delete-delivery/:deliveryId", deliveryController.deleteDelivery);

module.exports = router;
