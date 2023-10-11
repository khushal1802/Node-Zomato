const express = require("express");
const validate = require("../../middlewares/validate");
const { foodValidation } = require("../../validations");
const { foodController } = require("../../controllers");
const {upload} = require("../../middlewares/upload");
const auth=require("../../middlewares/auth")

const router = express.Router();

// Create food
router.post(
  "/create-food",
  auth(),
  upload.single("food_image"),
  validate(foodValidation.createFood),
  foodController.createfood
);

//  Food list
router.get("/list", foodController.getfoodList);

// Update food
router.put("/update-food/:foodId", foodController.updatefood);

// Manage food status
router.put("/manage-status/:foodId", auth(), foodController.managefoodStatus);

// Delete food
router.delete("/delete-food/:foodId", foodController.deletefood);

module.exports = router;
