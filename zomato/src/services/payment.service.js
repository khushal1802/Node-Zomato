const Payment = require("../models");

const createPayment = async (reqBody) => {
  return Payment.create(reqBody);
};

const getPaymentList = async () => {
  return Payment.find().populate("user").populate("order");
};

const getPaymentById = async (paymentId) => {
  return Payment.findById(paymentId);
};

const updatePayment = async (paymentId, updatebody) => {
  return Payment.findByIdAndUpdate(paymentId, { $set: updatebody });
};

const deletePayment = async (paymentId) => {
  return Payment.findByIdAndDelete(paymentId);
};

module.exports = {
  createPayment,
  getPaymentList,
  getPaymentById,
  updatePayment,
  deletePayment,
};
