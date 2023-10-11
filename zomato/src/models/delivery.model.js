const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema(
  {
    delivery_boy_name: {
      type: String,
      trim: true,
    },
    vehical_no: {
      type: Number,
      trim: true,
    },
    status: {
      type: String,
      enum: ["deliver", "cancel", "pending"],
    },
    payment: {
      type: mongoose.Types.ObjectId,
      ref: "Payment",
    },
    order: {
      type: mongoose.Types.ObjectId,
      ref: "order",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
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

const Delivery = mongoose.model("delivery", deliverySchema);
module.exports = Delivery;
