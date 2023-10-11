const { State } = require("../models");

const createState = async (reqbody) => {
  return State.create(reqbody);
};

const getStateList = async () => {
  return State.find().populate("country").count();
};
const getStateByName = async (stateName) => {
  return State.findOne({ stateName });
};

const getStateById = async (stateId) => {
  return State.findById(stateId);
};

const updateState = async (stateId, reqbody) => {
  return State.findByIdAndUpdate(stateId, { $set: reqbody });
};

const deleteState = async (stateId) => {
  return State.findByIdAndDelete(stateId);
};

module.exports = {
  createState,
  getStateList,
  getStateByName,
  getStateById,
  updateState,
  deleteState,
};
