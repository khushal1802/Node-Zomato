const { restaurantService } = require("../services");

// Create restaurant
const createRestaurant = async (req, res) => {
  try {
    const reqBody = req.body;

    if (req.file) {
      reqBody.restaurant_image = req.file.filename;
    } else {
      throw new Error("restaurant image is required!");
    }
    const restaurantExist = await restaurantService.getRestaurantByName(
      reqBody.restaurant_name
    );
    if (restaurantExist) {
      throw new Error("Restaurant already created....!t");
    }
    const restaurant = await restaurantService.createRestaurant(reqBody);
    if (!restaurant) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      succcess: true,
      message: "Restaurant created successfully ",
      data: restaurant,
    });
  } catch (error) {
    res.status(400).json({
      succcess: false,
      message: error.message,
    });
  }
};

// Get restaurant list
const getRestaurantList = async (req, res) => {
  try {
     const { search, ...options } = req.query;
     let filter = {};

     if (search) {
       filter.restaurant_name = { $regex: search, $options: "i" };
     }
    const restaurantList = await restaurantService.getRestaurantList(filter,options);
    if (!restaurantList) {
      throw new Error("Restaurant list not found...!");
    }
    res.status(200).json({
      success: true,
      message: "Restaurant list successfully...!",
      data: restaurant_list,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Update restaurant
const updateRestaurant = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    const reqBody = req.body;
    const restaurantExist = await restaurantService.getRestaurantById(
      restaurantId
    );
    if (!restaurantExist) {
      throw new Error("Restaurant does not exist...!");
    }
    await restaurantService.updateRestaurant(restaurantId, reqBody);
    res.status(200).json({
      succcess: true,
      message: "Restaurant updated successfully..!",
      data: reqBody,
    });
  } catch (error) {
    res.status(400).json({
      succcess: false,
      message: error.message,
    });
  }
};

//update status
const updateStatus = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    const restaurantExist = await restaurantService.getRestaurantById(
      restaurantId
    );
    if (!restaurantExist) {
      throw new Error("Restaurant does not exist...!");
    }
    await restaurantService.updateStatus(restaurantId);
    res.status(200).json({
      success: true,
      messgae: "Restaurant status updated successfully...!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete restaurant
const deleteRestaurant = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    const restaurantExist = await restaurantService.getRestaurantById(
      restaurantId
    );
    if (!restaurantExist) {
      throw new Error("Restaurant does not exist...!");
    }
    await restaurantService.deleteRestaurant(restaurantId);

    res.status(200).json({
      succcess: true,
      message: "Restaurant deleted successfully...!",
    });
  } catch (error) {
    res.status(400).json({
      succcess: false,
      message: error.message,
    });
  }
};

module.exports = {
  createRestaurant,
  getRestaurantList,
  updateRestaurant,
  updateStatus,
  deleteRestaurant,
};
