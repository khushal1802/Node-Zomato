const mongoose = require("mongoose");
const config = require("../config/config");

const bannerSchema = new mongoose.Schema(
  {
    banner_name: {
      type: String,
      trim: true,
    },
    banner_description: {
      type: String,
      trim: true,
    },
    banner_image: {
      type: Array,
      trim: true,
    },
     food: {
      type: mongoose.Types.ObjectId,
      ref: "Food",
    },
    is_active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: function (doc, data) {
        if (data?.food_image) {
          data.food_image = `${config.base_url}food_image/${data.food_image}`;
        }
        if (Array.isArray(data.banner_image)) {
          data.banner_image = data.banner_image.map(
            (banner_image) => `${config.base_url}banner_images/${banner_image}`
          );
        }
      },
    },
  }
);

const Banner = mongoose.model("Banner", bannerSchema);

module.exports = Banner;
