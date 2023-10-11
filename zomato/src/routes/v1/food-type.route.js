const express = require("express");
const validate = require("../../middlewares/validate");
const { foodTypeValidation } = require("../../validations");
const { foodTypeController } = require("../../controllers");

const router = express.Router();

// create foodType
router.post(
  "/create-foodType",
  validate(foodTypeValidation.createFoodType),
  foodTypeController.createFoodType
);

//foodType list
router.get("/list", foodTypeController.getFoodTypeList);

//foodType update
router.put("/update-foodType/:foodTypeId", foodTypeController.updateFoodType);

//foodType delete
router.delete("/delete-foodType/:foodTypeId", foodTypeController.deleteFoodType);

module.exports = router;
