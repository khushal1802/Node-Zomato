const mongoose = require("mongoose");
const config=require("../config/config")

const foodSchema = new mongoose.Schema(
  {
    food_name: {
      type: String,
      trim: true,
    },
    food_price: {
      type: Number,
      default: 10,
    },
    food_dec: {
      type: String,
      trim: true,
    },
    food_image: {
      type: String,
    },
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "restaurant",
    },
    foodType: {
      type: mongoose.Types.ObjectId,
      ref: "foodType",
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: function (doc, data) {
        if (data?.food_image) {
          data.food_image = `${config.base_url}banner_images/${data.food_image}`;
        }
      },
    },
  }
);

const Food = mongoose.model("Food", foodSchema);
module.exports = Food;
