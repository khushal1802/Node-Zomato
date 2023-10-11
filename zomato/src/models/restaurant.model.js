const mongoose = require("mongoose");
const config = require("../config/config");

const restaurantSchema = new mongoose.Schema(
  {
    restaurant_name: {
      type: String,
      trim: true,
    },
    restaurant_address: {
      type: String,
      trim: true,
    },
    restaurant_image: {
      type: String,
      trim: true,
    },
    restaurant_status: {
      type: Boolean,
      default: true,
    },
    phone_no: {
      type: Number,
      trim: true,
    },
    whatsapp_notification: {
      type: Boolean,
      default: true,
    },
    food: {
      type: mongoose.Types.ObjectId,
      ref: "food",
    },
    city: {
      type: mongoose.Types.ObjectId,
      ref: "city",
    },
    restaurant_type: {
      type: mongoose.Types.ObjectId,
      ref: "restaurant_type",
    },

    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
    versionKey: false,
    toJSON: {
      transform: function (doc, data) {
        if (data?.restaurant_image) {
          data.restaurant_image = `${config.base_url}banner_images/${data.restaurant_image}`;
        }
      },
    },
  }
);

const restaurant = mongoose.model("restaurant", restaurantSchema);

module.exports = restaurant;