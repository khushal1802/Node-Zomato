const Delivery = require("../models");

const createDelivery = async (reqBody) => {
  return Delivery.create(reqBody);
};

const getDeliveryList = async () => {
  return Delivery.find()
    .populate("user")
    .populate("payment")
    .populate("order")
    .count();
};

const getDeliveryById = async (deliveryId) => {
  return Delivery.findById(deliveryId);
};

const updateDelivery = async (deliveryId, updatebody) => {
  return Delivery.findByIdAndUpdate(deliveryId, { $set: updatebody });
};

const deleteDelivery = async (deliveryId) => {
  return Delivery.findByIdAndDelete(deliveryId);
};

module.exports = {
  createDelivery,
  getDeliveryList,
  getDeliveryById,
  updateDelivery,
  deleteDelivery,
};
