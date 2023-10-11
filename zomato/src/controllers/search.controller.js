const {
  stateService,
  searchService,
  cityService
} = require("../services");

// city by state id
const cityByState = async (req, res) => {
  try {
    const stateExist = await stateService.getStateById(req.params.stateId);
    if (!stateExist) {
      throw new Error("State not found...!");
    }
      const cityList = await searchService.cityByState(req.params.stateId);

    res.status(200).json({
      success: true,
      message: "city List sucessfully...! ",
      data: cityList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// city by state name
const cityByStateName = async (req, res) => {
  try {
    const stateExist = await stateService.getStateByName(req.params.state_name);
    if (!stateExist) {
      throw new Error("State not found...!");
    }
      const cityList = await searchService.cityByStateName(
        req.body.state_name
      );

    res.status(200).json({
      success: true,
      message: "city List sucessfully...! ",
      data: cityList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// restaurant by city id
const restaurantByCity = async (req, res) => {
  try {
    const cityExist = await cityService.getCityById(req.params.cityId);
    if (!cityExist) {
      throw new Error("City not found...!");
    }
    const restaurantList = await searchService.restaurantByCity(
      req.params.cityId
    );
    res.status(200).json({
      success: true,
      message: "Restaurant List sucessfully...!",
      data: restaurantList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// city by state name
const restaurantByCityName = async (req, res) => {
  try {
    const cityExist = await cityService.getCityByName(req.params.city_name);
    if (!cityExist) {
      throw new Error("City not found...!");
    }
    const restaurantList = await searchService.restaurantByCityName(
      req.body.city_name
    );
    res.status(200).json({
      success: true,
      message: "Restaurant List sucessfully...! ",
      data: restaurantList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  cityByState,
  cityByStateName,
  restaurantByCity,
  restaurantByCityName,
};
