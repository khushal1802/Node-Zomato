const FoodType = require("../models");

const createFoodType = async (reqBody) => {
  return FoodType.create(reqBody);
};

// const getFoodTypeList = async () => {
//   return FoodType.find().populate("restaurant");
// };

const getFoodTypeList = async (filter, options) => {
  const skip = Number((options.page || 1) - 1) * Number(options.limit || 10);
  return FoodType.find(filter)
    .limit(Number(options.limit))
    .skip(Number(skip))
    .populate("restaurant");
};

const getFoodTypeById = async (foodTypeId) => {
  return FoodType.findById(foodTypeId);
};

const updateFoodType = async (foodTypeId, updatebody) => {
  return FoodType.findByIdAndUpdate(foodTypeId, { $set: updatebody });
};

const deleteFoodType = async (foodTypeId) => {
  return FoodType.findByIdAndDelete(foodTypeId);
};

module.exports = {
  createFoodType,
  getFoodTypeList,
  getFoodTypeById,
  updateFoodType,
  deleteFoodType,
};
