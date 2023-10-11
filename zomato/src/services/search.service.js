const { stateService, cityService} = require("../services");
const { City, Restaurant } = require("../models");

// city by state id
const cityByState = async (stateid) => {
  return City.find({ $or: [{ state: `${stateid}` }] });
};

// city by state name
const cityByStateName = async (state_name) => {
  const city = await stateService.getStateByName(state_name);
  return City.find({ $or: [{ state: `${state.id}` }] });
};

// restaurant by city id
const restaurantByCity = async (cityId) => {
  return Restaurant.find({ $or: [{ city: `${cityId}` }] });
};

// restaurant by city name
const restaurantByCityName = async (city_name) => {
  const city = await cityService.getCityByName(city_name);
  return Restaurant.find({ $or: [{ city: `${city.id}` }] });
};

module.exports = {
  cityByState,
  cityByStateName,
  restaurantByCity,
  restaurantByCityName,
};
