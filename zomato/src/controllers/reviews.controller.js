const { reviewsService } = require("../services");

const createReviews = async (req, res) => {
  try {
    const reqBody = req.body;
    const Reviews = await reviewsService.createReviews(reqBody);
    if (!Reviews) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Reviews create successfully!",
      data: { Reviews },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getReviewsList = async (req, res) => {
  try {
    const Reviews = await reviewsService.getReviewsList();

    if (!Reviews) {
      throw new Error("Something wen twrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Reviews List Successfully!",
      data: { Reviews },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateReviews = async (req, res) => {
  try {
    const reviewsId = req.params.reviewsId;
    const Reviews = await reviewsService.getReviewsById(reviewsId);
    if (!Reviews) {
      throw new Error("Reviews not found!");
    }
    await reviewsService.updateReviews(reviewsId, req.body);
    res.status(200).json({
      success: true,
      message: "Reviews Successfully Updated",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteReviews = async (req, res) => {
  try {
    const reviewsId = req.params.Id;
    const Reviews = await reviewsService.getReviewsById(reviewsId);
    if (!Reviews) {
      throw new Error("User not found!");
    }
    await reviewsService.deleteReviews(reviewsId);
    res.status(200).json({
      success: true,
      message: "Reviews Successfully Delete",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createReviews,
  getReviewsList,
  deleteReviews,
  updateReviews,
};
