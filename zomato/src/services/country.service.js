const { Country } = require("../models");

const createCountry = async (reqBody) => {
  return Country.create(reqBody);
};

const getCountryList = async () => {
  return Country.find().count();
};
const getCountryByName = async (countryName) => {
  return Country.findOne({ countryName });
};

const getCountryById = async (countryId) => {
  return Country.findById(countryId);
};

const updateCountry = async (countryId, reqbody) => {
  return Country.findByIdAndUpdate(countryId, { $set: reqbody });
};

const deleteCountry = async (countryId) => {
  return Country.findByIdAndDelete(countryId);
};

module.exports = {
  createCountry,
  getCountryList,
  getCountryByName,
  getCountryById,
  updateCountry,
  deleteCountry,
};
