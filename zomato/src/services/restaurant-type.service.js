const RestaurantType = require("../models");

const createRestaurantType = async (reqBody) => {
  return RestaurantType.create(reqBody);
};

const getRestaurantTypeList = async () => {
  return RestaurantType.find().populate("user");
};

const getRestaurantTypeById = async (restaurantTypeId) => {
  return RestaurantType.findById(restaurantTypeId);
};

const updateRestaurantType = async (restaurantTypeId, updatebody) => {
  return RestaurantType.findByIdAndUpdate(restaurantTypeId, { $set: updatebody });
};

const deleteRestaurantType = async (restaurantTypeId) => {
  return RestaurantType.findByIdAndDelete(restaurantTypeId);
};

module.exports = {
  createRestaurantType,
  getRestaurantTypeList,
  getRestaurantTypeById,
  updateRestaurantType,
  deleteRestaurantType,
};
