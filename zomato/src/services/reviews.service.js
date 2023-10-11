const Reviews = require("../models");

const createReviews = async (reqBody) => {
  return Reviews.create(reqBody);
};

const getReviewsList = async () => {
  return Reviews.find().populate("user");
};

const getReviewsById = async (reviewsId) => {
  return Reviews.findById(reviewsId);
};

const updateReviews = async (reviewsId, updatebody) => {
  return Reviews.findByIdAndUpdate(reviewsId, { $set: updatebody });
};

const deleteReviews = async (reviewsId) => {
  return Reviews.findByIdAndDelete(reviewsId);
};

module.exports = {
  createReviews,
  getReviewsList,
  getReviewsById,
  updateReviews,
  deleteReviews,
};
