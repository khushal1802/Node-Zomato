const mongoose = require("mongoose");

const foodTypeSchema = new mongoose.Schema(
  {
    type_name: {
      type: String,
      trim: true,
    },
    type_desc: {
      type: String,
      trim: true,
    },
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "Restaurant",
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

const FoodType = mongoose.model("foodType", foodTypeSchema);
module.exports = FoodType;
