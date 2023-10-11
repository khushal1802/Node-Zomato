const express = require("express");
const auth = require("../../middlewares/auth");
const { upload } = require("../../middlewares/upload");
const validate = require("../../middlewares/validate");
const { bannerValidation } = require("../../validations");
const { bannerController } = require("../../controllers");

const router = express.Router();

/** Create banner multiple image upload */
router.post(
  "/multiple-banners",
  auth(),
  upload.array("banner_image"),
  validate(bannerValidation.createBanner),
  bannerController.multipleBanner
);

/** Get banner list */
router.get("/list", bannerController.getBannerList);

/** Get banner details */
router.get("/details/:bannerId", bannerController.getDetails);

/** Update banner details */
router.put(
  "/update/:bannerId",
  upload.array("banner_image"),
  bannerController.updateBanner
);

/** Delete banner */
router.delete("/delete/:bannerId", bannerController.deleteBanner);

/** Manage banner status */
router.put("/manage-status/:bannerId", bannerController.manageBannerStatus);

module.exports = router;
