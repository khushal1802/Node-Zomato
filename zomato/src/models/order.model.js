const { date } = require("joi");
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    order_no: {
      type: Number,
      trim: true,
    },
    order_date: {
      type: Date,
      default: Date.now(),
    },
    total_Price: {
      type: Number,
      trim: true,
    },
    status: {
      type: Boolean,
      enum: ["pending", "cancel", "accept"],
    },
    cart: {
      type: mongoose.Types.ObjectId,
      ref: "food",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "restaurant",
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Order = mongoose.model("order", orderSchema);
module.exports = Order;
