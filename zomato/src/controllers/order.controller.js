const { orderService,emailService,userService } = require("../services");
const ejs = require("ejs");
const path = require("path");

const createOrder= async (req, res) => {
  try {
    const reqBody = req.body;

    const orderExists = await orderService.getOrderByEmail(reqBody.email);
    if (orderExists) {
      throw new Error("order already created by this email!");
    }
    const userExist = await userService.getUserById(reqBody.user);
    console.log(userExist);
    console.log("Path" + __dirname + "../views/order-otp  .ejs");
    await ejs.renderFile(
      path.join(__dirname, "../views/otp_template.ejs"),
      {
        email: userExist.email,
        otp: ("0".repeat(4) + Math.floor(Math.random() * 10 ** 4)).slice(-4),
        first_name: userExist.first_name,
        last_name: userExist.last_name,
        order_no: reqBody.order_no,
        order_date: reqBody.order_date,
        total: reqBody.total,
      },
      async (err, data) => {
        if (err) {
          console.log(err);
          let orderCreated = await orderService.getOrderByEmail(reqBody.email);
          console.log(orderCreated);
          if (orderCreated) {
            await orderService.deleteOrderByEmail(reqBody.email);
          }
          throw new Error("Ejs Something went wrong, please try again.");
        } else {
          emailService.sendMail(reqBody.email, data, "Verify Order");
        }
      }
    );

    const Order = await orderService.createOrder(reqBody);
    if (!Order) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Ordercreate successfully!",
      data: { Order },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getOrderList = async (req, res) => {
  try {
    const Order= await orderService.getOrderList();

    if (!Order) {
      throw new Error("Something wen twrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "OrderList Successfully!",
      data: { Order},
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateOrder= async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const Order= await orderService.getOrderById(orderId);
    if (!Order) {
      throw new Error("Ordernot found!");
    }
    await orderService.updateOrder(orderId, req.body);
    res.status(200).json({
      success: true,
      message: "OrderSuccessfully Updated",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteOrder= async (req, res) => {
  try {
    const orderId = req.params.Id;
    const Order= await orderService.getOrderById(orderId);
    if (!Order) {
      throw new Error("User not found!");
    }
    await orderService.deleteOrder(orderId);
    res.status(200).json({
      success: true,
      message: "OrderSuccessfully Delete",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createOrder,
  getOrderList,
  deleteOrder,
  updateOrder,
};
