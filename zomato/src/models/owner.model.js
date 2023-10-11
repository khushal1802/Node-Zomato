const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema(
  {
    owner_name: {
      type: String,
      trim: true,
    },
    owner_phoneNo: {
      type: Number,
      trim: true,
    },
    owner_email: {
      type: String,
      trim: true,
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

const Owner = mongoose.model("owner", ownerSchema);
module.exports = Owner;
