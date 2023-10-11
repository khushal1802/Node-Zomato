const { deliveryService } = require("../services");

const createDelivery = async (req, res) => {
  try {
    const reqBody = req.body;
    const delivery = await deliveryService.createDelivery(reqBody);
    if (!delivery) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "delivery create successfully!",
      data: { delivery },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getDeliveryList = async (req, res) => {
  try {
    const delivery = await deliveryService.getDeliveryList();
    if (!delivery) {
      throw new Error("Something wen twrong, please try again or later!");
      }

    res.status(200).json({
      success: true,
      message: "delivery List Successfully!",
      data: { delivery },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateDelivery = async (req, res) => {
  try {
    const deliveryId = req.params.deliveryId;
    const delivery = await deliveryService.getDeliveryById(deliveryId);
    if (!delivery) {
      throw new Error("delivery not found!");
    }
    await deliveryService.updateDelivery(deliveryId, req.body);
    res.status(200).json({
      success: true,
      message: "delivery Successfully Updated",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteDelivery = async (req, res) => {
  try {
    const deliveryId = req.params.Id;
    const delivery = await deliveryService.getDeliveryById(deliveryId);
    if (!delivery) {
      throw new Error("User not found!");
    }
    await deliveryService.deleteDelivery(deliveryId);
    res.status(200).json({
      success: true,
      message: "delivery Successfully Delete",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createDelivery,
  getDeliveryList,
  updateDelivery,
  deleteDelivery,
};
