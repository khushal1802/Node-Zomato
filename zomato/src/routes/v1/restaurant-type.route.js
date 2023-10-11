const express = require("express");
const { restaurantTypeValidation } = require("../../validations");
const { restaurantTypeController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// Create restaurantType
router.post(
  "/create-restaurantType",
  validate(restaurantTypeValidation.createRestaurantType),
  restaurantTypeController.createRastaurantType
);

// List restaurantType
router.get("/list", restaurantTypeController.getRastaurantTypeList);

// Update restaurantType
router.put(
  "/update-restaurantType/:id",
  restaurantTypeController.updateRastaurantType
);

// Delete restaurantType
router.delete(
  "/delete-restaurantType/:Id",
  restaurantTypeController.deleteRastaurantType
);

module.exports = router;
