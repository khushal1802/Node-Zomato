const fs = require("fs");
const { foodService } = require("../services");

/** Create food */
const createfood = async (req, res) => {
  try {
    const reqBody = req.body;

    if (req.file) {
      reqBody.food_image = req.file.filename;
    } else {
      throw new Error("food image is required!");
    }

    const createdfood = await foodService.createFood(reqBody);

    res.status(200).json({
      success: true,
      message: "food create successfully!",
      data: createdfood,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong, please try again or later!",
    });
  }
};

/** Get prooduct list */
const getfoodList = async (req, res) => {
  try {
     const { search, ...options } = req.query;
     let filter = {};

     if (search) {
       filter.food_name = { $regex: search, $options: "i" };
     }
    const getList = await foodService.getFoodList(filter, options);

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

/** Get food details */
const getDetails = async (req, res) => {
  try {
    const foodExists = await foodService.getFoodById(
      req.params.foodId
    );
    if (!foodExists) {
      throw new Error("food not found!");
    }

    res.status(200).json({
      success: true,
      message: "food details get successfully!",
      data: foodExists,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong, please try again or later!",
    });
  }
};


/** Update food details */
const updatefood = async (req, res) => {
  try {
    const reqBody = req.body;
    const foodId = req.params.foodId;
    const foodExists = await foodService.getFoodById(foodId);
    if (!foodExists) {
      throw new Error("food not found!");
    }

    if (req.file) {
      reqBody.food_image = req.file.filename;
    }

    const updatedfood = await foodService.updateFood(
      foodId,
      reqBody
    );
    if (updatedfood) {
      if (req.file) {
        const filePath = `./public/food_images/${foodExists.food_image}`;
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
    } else {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "food details update successfully!",
      data: updatedfood,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong, please try again or later!",
    });
  }
};

/** Manage food status */
const managefoodStatus = async (req, res) => {
  try {
    const manageStatus = await foodService.manageFoodStatus(
      req.params.foodId
    );

    let resMessage = manageStatus.is_active
      ? "food can enable to sale."
      : "food can not enable to sale";

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

/** Delete food */
const deletefood = async (req, res) => {
  try {
    const foodId = req.params.foodId;
    const foodExists = await foodService.getFoodById(foodId);
    if (!foodExists) {
      throw new Error("food not found!");
    }

    const deletedfood = await foodService.deleteFood(foodId);
    if (deletedfood) {
      const filePath = `./public/food_images/${foodExists.food_image}`;
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    } else {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "food delete successfully!",
      data: deletedfood,
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
  createfood,
  getDetails,
  getfoodList,
  updatefood,
  managefoodStatus,
  deletefood,
};
