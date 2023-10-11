const express = require("express");
const validate = require("../../middlewares/validate");
const { cityValidation } = require("../../validations");
const { cityController } = require("../../controllers");
const router = express.Router();

// create city
router.post(
  "/create-city",
  validate(cityValidation.createCity),
  cityController.createCity
);

// city list
router.get("/list", cityController.getCityList);

// city update
router.put("/update-city/:cityId", cityController.updateCity);

// city delete
router.delete("/delete-city/:cityId", cityController.deleteCity);


module.exports = router;
