const express = require("express");
const { searchController } = require("../../controllers");
const router = express.Router()

// city by state id
router.get(
    "/cityByState/:stateId",
    searchController.cityByState
)

// city by state name
router.get(
    "/cityByStateName/:stateName",
    searchController.cityByStateName
)

// restaurant by city id
router.get(
    "/restaurantByCity/:cityId",
    searchController.restaurantByCity
)

// restaurant by city name
router.get(
    "/restaurantByCityName/:cityName",
    searchController.restaurantByCityName
)

module.exports = router;