const { Food } = require("../models");

const createFood = async (reqBody) => {
  return Food.create(reqBody);
};

// const getFoodList = async (req, res) => {
//   return Food.find().populate("restaurant");
// };

const getFoodList = async (filter, options) => {
  const skip = Number((options.page || 1) - 1) * Number(options.limit || 10);
  return Food.find(filter)
    .limit(Number(options.limit))
    .skip(Number(skip))
    .populate("restaurant")
    .populate("foodType")
    .count();
};

const updateFood = async (foodId, reqBody) => {
  return Food.findOneAndUpdate(foodId, { $set: reqBody });
};

const manageFoodStatus = async (foodId) => {
  const FoodExists = await getFoodById(foodId);
  if (!FoodExists) {
    throw new Error("Food not found!");
  }
  return Food.findOneAndUpdate(
    { _id: foodId },
    {
      $set: {
        is_active: !FoodExists.is_active,
      },
    },
    { new: true }
  );
};

const deleteFood = async (foodId) => {
  return Food.findOneAndDelete({ _id: foodId });
};

module.exports = {
  createFood,
  getFoodList,
  updateFood,
  manageFoodStatus,
  deleteFood,
};
