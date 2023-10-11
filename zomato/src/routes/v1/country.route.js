const express = require("express");
const validate = require("../../middlewares/validate");
const { countryValidation } = require("../../validations");
const { countryController } = require("../../controllers");

const router = express.Router();

//create country
router.post(
  "/create-country",
  validate(countryValidation.createCountry),
  countryController.createCountry
);

//country list
router.get("/list", countryController.getCountryList);

//country update
router.put("/update-country/:countryId", countryController.updateCountry);

// country delete
router.delete("/delete-country/:countryId", countryController.deleteCountry);

module.exports = router;
