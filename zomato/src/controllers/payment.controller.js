const { paymentService } = require("../services");

const createPayment = async (req, res) => {
  try {
    const reqBody = req.body;
    const Payment = await paymentService.createPayment(reqBody);
    if (!Payment) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Payment create successfully!",
      data: { Payment },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getPaymentList = async (req, res) => {
  try {
    const Payment = await paymentService.getPaymentList();

    if (!Payment) {
      throw new Error("Something wen twrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Payment List Successfully!",
      data: { Payment },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updatePayment = async (req, res) => {
  try {
    const paymentId = req.params.paymentId;
    const Payment = await paymentService.getPaymentById(paymentId);
    if (!Payment) {
      throw new Error("Payment not found!");
    }
    await paymentService.updatePayment(paymentId, req.body);
    res.status(200).json({
      success: true,
      message: "Payment Successfully Updated",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deletePayment = async (req, res) => {
  try {
    const paymentId = req.params.Id;
    const Payment = await paymentService.getPaymentById(paymentId);
    if (!Payment) {
      throw new Error("User not found!");
    }
    await paymentService.deletePayment(paymentId);
    res.status(200).json({
      success: true,
      message: "Payment Successfully Delete",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createPayment,
  getPaymentList,
  deletePayment,
  updatePayment,
};
