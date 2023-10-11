const express = require("express");
const { restaurantValidation } = require("../../validations");
const { restaurantController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");
const { upload } = require("../../middlewares/upload");

const router = express.Router();

// Create restaurant
router.post(
    "/create-restaurant",
    auth(),
  upload.single("restaurant_image"),
  validate(restaurantValidation.createRestaurant),
  restaurantController.createRestaurant
);

//  list restaurant
router.get("/list", restaurantController.getRestaurantList);

//  Update restaurant
router.put(
  "/update-restaurant/:restaurantId",
  restaurantController.updateRestaurant
);

//Update-status restaurant
router.put(
  "/update-restaurant-status/:restaurantId",
  restaurantController.updateStatus
);

// Delete restaurant
router.delete(
  "/delete-restaurant/:restaurantId",
  restaurantController.deleteRestaurant
);

module.exports = router;
