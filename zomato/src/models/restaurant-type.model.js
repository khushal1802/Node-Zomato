const mongoose = require("mongoose");

const restaurantTypeSchema = mongoose.Schema(
  {
    restaurant_type: {
      type: String,
      trim: true,
    },
    type_desc: {
      type: String,
      trim: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
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

const RestaurantType = mongoose.model("Restaurant_type", restaurantTypeSchema);
module.exports = RestaurantType;
