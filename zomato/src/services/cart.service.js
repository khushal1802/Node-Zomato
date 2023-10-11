const { Cart } = require("../models");


const createCart = async (reqbody) => {
  return Cart.create(reqbody);
};
const getCartList = async () => {
  return Cart.find()
    .populate("user")
    .populate("food")
    .populate("order");
};
const getCartByUser = async (user) => {
  return Cart.findOne({ user });
};

const getCartById = async (cartId) => {
  return Cart.findById(cartId);
};

const updateCart = async (cartId, reqbody) => {
  return Cart.findByIdAndUpdate(cartId, { $set: reqbody });
};

const deleteCart = async (cartId) => {
  return Cart.findByIdAndDelete(cartId);
};


module.exports = {
  createCart,
  getCartList,
  getCartByUser,
  getCartById,
  updateCart,
  deleteCart,
};
