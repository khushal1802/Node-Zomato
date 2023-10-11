const { User } = require("../models");

const findUserByEmail = async (email) => {
  return await User.findOne(email);
};

const findUserAndUpdate = async (_id, token) => {
  return await User.findByIdAndUpdate(
    { _id },
    {
      $set: { token },
    },
    { new: true }
  );
};

// create user
const createUser = async (reqBody) => {
  return User.create(reqBody);
};

const getAllUser = async (req, res) => {
  return await User.find();
};

//  Get user list
const getUserList = async (req, res) => {
  return User.find();
};

const getUserById = async (userId) => {
  return User.findById(userId);
};

const updateDetails = async (userId, updateBody) => {
  return User.findByIdAndUpdate(userId, { $set: updateBody });
};

// delete user
const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId);
};

const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

const deleteUserByEmail = async (email) => {
  return User.findOneAndDelete({ email: email });
};

module.exports = {
  findUserByEmail,
  findUserAndUpdate,
  getAllUser,
  createUser,
  getUserList,
  getUserById,
  updateDetails,
  deleteUser,
  getUserByEmail,
  deleteUserByEmail,
};
