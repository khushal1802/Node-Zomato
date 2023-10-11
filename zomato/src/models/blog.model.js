const mongoose = require("mongoose");
const config=require("../config/config")

const blogSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    blog_img: {
      type: String,
    },
    title: {
      type: String,
      trim: true,
    },
    dec: {
      type: String,
      trim: true,
    },
    hashtags: {
      type: String,
      trim: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comment: {
      type: String,
      trim:true
    },
    date: {
      type: Date,
      default:Date.now()
    },
    food: {
      type: mongoose.Types.ObjectId,
      ref:"Food",
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: function (doc, data) {
        if (data?.blog_img) {
          data.blog_img = `${config.base_url}blog_img/${data.blog_img}`;
        }
      },
    },
  }
);

const blog = mongoose.model("blog", blogSchema);

module.exports = blog;

