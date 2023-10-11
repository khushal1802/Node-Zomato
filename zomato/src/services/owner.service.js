const Owner = require("../models");

const createOwner = async (reqBody) => {
  return Owner.create(reqBody);
};

const getOwnerList = async () => {
  return Owner.find().populate("user").populate("restaurant");
};

const getOwnerById = async (ownerId) => {
  return Owner.findById(ownerId);
};

const updateOwner = async (ownerId, updatebody) => {
  return Owner.findByIdAndUpdate(ownerId, { $set: updatebody });
};

const deleteOwner = async (ownerId) => {
  return Owner.findByIdAndDelete(ownerId);
};

module.exports = {
  createOwner,
  getOwnerList,
  getOwnerById,
  updateOwner,
  deleteOwner,
};
