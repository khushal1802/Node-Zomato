const express = require("express");
const { reviewsValidation } = require("../../validations");
const { reviewsController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// Create reviews
router.post(
  "/create-reviews",
  validate(reviewsValidation.createReviews),
  reviewsController.createReviews
);

// List reviews
router.get("/list", reviewsController.getReviewsList);

// Update reviews
router.put("/update-reviews/:id", reviewsController.updateReviews);

// Delete reviews
router.delete("/delete-reviews/:Id", reviewsController.deleteReviews);

module.exports = router;