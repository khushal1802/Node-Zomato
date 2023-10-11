const { City } = require("../models");

const createCity = async (reqbody) => {
  return City.create(reqbody);
};

const getCityList = async () => {
  return City.find().populate("state").populate("country").count();
};

const getCityByName = async (cityName) => {
  return City.findOne({ cityName });
};

const getCityById = async (cityId) => {
  return City.findById(cityId);
};

const updateCity = async (cityId, reqbody) => {
  return City.findByIdAndUpdate(cityId, { $set: reqbody });
};

const deleteCity = async (cityId) => {
  return City.findByIdAndDelete(cityId);
};

module.exports = {
  createCity,
  getCityList,
  getCityByName,
  getCityById,
  updateCity,
  deleteCity,
};
