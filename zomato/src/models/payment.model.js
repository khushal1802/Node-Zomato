const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    payment_method: {
      type: String,
      trim: true,
    },
    card_holder_name: {
      type: String,
      trim: true,
    },
    card_number: {
      type: Number,
      trim: true,
    },
    amount: {
      type: Number,
      trim: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    order: {
      type: mongoose.Types.ObjectId,
      ref: "order",
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

const Payment = mongoose.model("payment", paymentSchema);
module.exports = Payment;
