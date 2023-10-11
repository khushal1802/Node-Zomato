const { Restaurant } = require("../models");

const createRestaurant = async (reqbody) => {
  return Restaurant.create(reqbody);
};

// const getRestaurantList = async () => {
//   return Restaurant.find().populate("restaurant_type").populate("city");
// };

const getRestaurantList = async (filter, options) => {
  const skip = Number((options.page || 1) - 1) * Number(options.limit || 10);
  return Restaurant.find(filter)
    .limit(Number(options.limit))
    .skip(Number(skip))
    .populate("restaurant_type")
    .populate("city")
    .count();
};

const getRestaurantByName = async (restaurantName) => {
  return Restaurant.findOne({ restaurantName });
};

const getRestaurantById = async (restaurantId) => {
  return Restaurant.findById(restaurantId);
};

const updateRestaurant = async (restaurantId, reqbody) => {
  return Restaurant.findByIdAndUpdate(restaurantId, { $set: reqbody });
};

const updateStatus = async (restaurantId) => {
  return Restaurant.findByIdAndUpdate(restaurantId, {
    $set: { restaurant_status: !restaurant.restaurant_status },
  });
};

const deleteRestaurant = async (restaurantId) => {
  return Restaurant.findByIdAndDelete(restaurantId);
};

module.exports = {
  createRestaurant,
  getRestaurantList,
  getRestaurantByName,
  getRestaurantById,
  updateRestaurant,
  updateStatus,
  deleteRestaurant,
};
