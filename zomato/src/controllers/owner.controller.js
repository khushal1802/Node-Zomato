const { ownerService } = require("../services");

const createOwner = async (req, res) => {
  try {
    const reqBody = req.body;
    const Owner = await ownerService.createOwner(reqBody);
    if (!Owner) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Owner create successfully!",
      data: { Owner },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getOwnerList = async (req, res) => {
  try {
    const Owner = await ownerService.getOwnerList();

    if (!Owner) {
      throw new Error("Something wen twrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Owner List Successfully!",
      data: { Owner },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateOwner = async (req, res) => {
  try {
    const ownerId = req.params.ownerId;
    const Owner = await ownerService.getOwnerById(ownerId);
    if (!Owner) {
      throw new Error("Owner not found!");
    }
    await ownerService.updateOwner(ownerId, req.body);
    res.status(200).json({
      success: true,
      message: "Owner Successfully Updated",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteOwner = async (req, res) => {
  try {
    const ownerId = req.params.Id;
    const Owner = await ownerService.getOwnerById(ownerId);
    if (!Owner) {
      throw new Error("User not found!");
    }
    await ownerService.deleteOwner(ownerId);
    res.status(200).json({
      success: true,
      message: "Owner Successfully Delete",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createOwner,
  getOwnerList,
  deleteOwner,
  updateOwner,
};
