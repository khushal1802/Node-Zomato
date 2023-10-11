const { Banner } = require("../models");

const createBanner = async (reqBody) => {
  return Banner.create(reqBody);
};

const getList = async () => {
  return Banner.find().populate("food");
};

const getBannerById = async (bannerId) => {
  return Banner.findOne({ _id: bannerId });
};

const updateBanner = async (bannerId, reqBody) => {
  return Banner.findOneAndUpdate(
    { _id: bannerId },
    { $set: reqBody },
    { new: true }
  );
};

const manageBannerStatus = async (bannerId) => {
  const bannerExists = await getBannerById(bannerId);
  if (!bannerExists) {
    throw new Error("Banner not found!");
  }

  return Banner.findOneAndUpdate(
    { _id: bannerId },
    {
      $set: {
        is_active: !bannerExists.is_active,
      },
    },
    { new: true }
  );
};

const deleteBanner = async (bannerId) => {
  return Banner.findOneAndDelete({ _id: bannerId });
};

module.exports = {
  getBannerById,
  getList,
  createBanner,
  updateBanner,
  manageBannerStatus,
  deleteBanner,
};
