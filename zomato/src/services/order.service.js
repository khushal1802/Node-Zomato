const Order = require("../models");

const createOrder = async (reqBody) => {
  return Order.create(reqBody);
};

const getOrderList = async () => {
  return Order.find().populate("user").populate("cart").populate("restaurant").count();
};

const getOrderById = async (orderId) => {
  return Order.findById(orderId);
};

const getOrderByEmail = async (email) => {
  return Order.findOne({ email });
};

const updateOrder = async (orderId, updatebody) => {
  return Order.findByIdAndUpdate(orderId, { $set: updatebody });
};

const deleteOrder = async (orderId) => {
  return Order.findByIdAndDelete(orderId);
};

const deleteOrderByEmail = async (email) => {
  return Order.findOneAndDelete({ email: email });
};

module.exports = {
  createOrder,
  getOrderList,
  getOrderById,
  getOrderByEmail,
  updateOrder,
  deleteOrder,
  deleteOrderByEmail,
};
