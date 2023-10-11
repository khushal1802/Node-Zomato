const { restaurantTypeService } = require("../services");

const createRastaurantType = async (req, res) => {
  try {
    const reqBody = req.body;
    const RastaurantType = await restaurantTypeService.createRestaurantType(
      reqBody
    );
    if (!RastaurantType) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "RastaurantType create successfully!",
      data: { RastaurantType },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getRastaurantTypeList = async (req, res) => {
  try {
    const RastaurantType = await restaurantTypeService.getRastaurantTypeList();

    if (!RastaurantType) {
      throw new Error("Something wen twrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "RastaurantType List Successfully!",
      data: { RastaurantType },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateRastaurantType = async (req, res) => {
  try {
    const rastaurantTypeId = req.params.rastaurantTypeId;
    const RastaurantType = await restaurantTypeService.getRastaurantTypeById(rastaurantTypeId);
    if (!RastaurantType) {
      throw new Error("RastaurantType not found!");
    }
    await restaurantTypeService.updateRastaurantType(rastaurantTypeId, req.body);
    res.status(200).json({
      success: true,
      message: "RastaurantType Successfully Updated",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteRastaurantType = async (req, res) => {
  try {
    const rastaurantTypeId = req.params.Id;
    const RastaurantType = await restaurantTypeService.getRastaurantTypeById(rastaurantTypeId);
    if (!RastaurantType) {
      throw new Error("User not found!");
    }
    await restaurantTypeService.deleteRastaurantType(rastaurantTypeId);
    res.status(200).json({
      success: true,
      message: "RastaurantType Successfully Delete",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createRastaurantType,
  getRastaurantTypeList,
  updateRastaurantType,
  deleteRastaurantType,
};
