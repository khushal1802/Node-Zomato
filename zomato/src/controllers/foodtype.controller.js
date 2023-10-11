const { foodTypeService } = require("../services");

const createFoodType = async (req, res) => {
  try {
    const reqBody = req.body;
    const foodType = await foodTypeService.createFoodType(reqBody);
    if (!foodType) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "foodType create successfully!",
      data: { foodType },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getFoodTypeList = async (req, res) => {
  try {
     const { search, ...options } = req.query;
     let filter = {};

     if (search) {
       filter.type_name = { $regex: search, $options: "i" };
    }
    
    const foodType = await foodTypeService.getFoodTypeList(filter,options);
    if (!foodType) {
      throw new Error("Something wen twrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "foodType List Successfully!",
      data: { foodType },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateFoodType = async (req, res) => {
  try {
    const foodTypeId = req.params.foodTypeId;
    const foodType = await foodTypeService.getFoodTypeById(foodTypeId);
    if (!foodType) {
      throw new Error("foodType not found!");
    }
    await foodTypeService.updateFoodType(foodTypeId, req.body);
    res.status(200).json({
      success: true,
      message: "foodType Successfully Updated",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteFoodType = async (req, res) => {
  try {
    const foodTypeId = req.params.Id;
    const foodType = await foodTypeService.getFoodTypeById(foodTypeId);
    if (!foodType) {
      throw new Error("User not found!");
    }
    await foodTypeService.deleteFoodType(foodTypeId);
    res.status(200).json({
      success: true,
      message: "foodType Successfully Delete",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createFoodType,
  getFoodTypeList,
  updateFoodType,
  deleteFoodType,
};
