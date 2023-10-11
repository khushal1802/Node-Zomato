  const fs = require("fs");
  const { bannerService } = require("../services");

  /** Multiple Banner */
  const multipleBanner = async (req, res) => {
    try {
      const reqBody = req.body;

      banner_image = [];
      if (req.files) {
        for (let ele of req.files) {
          banner_image.push(ele.filename);
        }
      } else {
        throw new Error("Banner image is required!");
      }

      reqBody.banner_image = banner_image;

      const createdBanner = await bannerService.createBanner(reqBody);

      res.status(200).json({
        success: true,
        message: "Banner create successfully!",
        data: createdBanner,
      });
    } catch (error) {
      res.status(error?.statusCode || 400).json({
        success: false,
        message:
          error?.message || "Something went wrong, please try again or later!",
      });
    }
  };

  /** Get Banner list */
  const getBannerList = async (req, res) => {
    try {
      const getList = await bannerService.getList();

      res.status(200).json({
        success: true,
        data: getList,
      });
    } catch (error) {
      res.status(error?.statusCode || 400).json({
        success: false,
        message:
          error?.message || "Something went wrong, please try again or later!",
      });
    }
  };

  /** Get Banner details */
  const getDetails = async (req, res) => {
    try {
      const bannerExists = await bannerService.getBannerById(
        req.params.bannerId
      );
      if (!bannerExists) {
        throw new Error("banner not found!");
      }

      res.status(200).json({
        success: true,
        message: "banner details get successfully!",
        data: bannerExists,
      });
    } catch (error) {
      res.status(error?.statusCode || 400).json({
        success: false,
        message:
          error?.message || "Something went wrong, please try again or later!",
      });
    }
  };

  /** Update Banner details */
  const updateBanner = async (req, res) => {
    try {
      const reqBody = req.body;
      const bannerId = req.params.bannerId;
      const bannerExists = await bannerService.getbannerById(bannerId);
      if (!bannerExists) {
        throw new Error("banner not found!");
      }

      if (req.file) {
        reqBody.banner_image = req.file.filename;
      }

      const updatedbanner = await bannerService.updateBanner(bannerId, reqBody);
      if (updatedbanner) {
        if (req.file) {
          const filePath = `./public/banner_images/${bannerExists.banner_image}`;
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }
        }
      } else {
        throw new Error("Something went wrong, please try again or later!");
      }

      res.status(200).json({
        success: true,
        message: "banner details update successfully!",
        data: updatedbanner,
      });
    } catch (error) {
      res.status(error?.statusCode || 400).json({
        success: false,
        message:
          error?.message || "Something went wrong, please try again or later!",
      });
    }
  };

  /** Manage Banner status */
  const manageBannerStatus = async (req, res) => {
    try {
      const manageStatus = await bannerService.manageBannerStatus(
        req.params.bannerId
      );

      let resMessage = manageStatus.is_active
        ? "banner can enable to sale."
        : "banner can not enable to sale";

      res.status(200).json({
        success: true,
        message: resMessage,
        data: manageStatus,
      });
    } catch (error) {
      res.status(error?.statusCode || 400).json({
        success: false,
        message:
          error?.message || "Something went wrong, please try again or later!",
      });
    }
  };

  /** Delete Banner */
  const deleteBanner = async (req, res) => {
    try {
      const bannerId = req.params.bannerId;
      const bannerExists = await bannerService.getBannerById(bannerId);
      if (!bannerExists) {
        throw new Error("banner not found!");
      }

      const deletedbanner = await bannerService.deleteBanner(bannerId);
      if (deletedbanner) {
        const filePath = `./public/banner_images/${bannerExists.banner_image}`;
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      } else {
        throw new Error("Something went wrong, please try again or later!");
      }

      res.status(200).json({
        success: true,
        message: "banner delete successfully!",
        data: deletedbanner,
      });
    } catch (error) {
      res.status(error?.statusCode || 400).json({
        success: false,
        message:
          error?.message || "Something went wrong, please try again or later!",
      });
    }
  };

  module.exports = {
    multipleBanner,
    getDetails,
    getBannerList,
    updateBanner,
    manageBannerStatus,
    deleteBanner,
  };
