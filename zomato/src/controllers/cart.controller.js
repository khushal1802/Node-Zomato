const { cartService, userService } = require("../services");

const createCart = async (req, res) => {
  try {
    const reqBody = req.body;
    const userExist = await userService.getUserById(reqBody.user);
    if (!userExist) {
      throw new Error("User not found ...!");
    }
    const cartExist = await cartService.getCartByUser(reqBody.user);
    if (cartExist) {
      throw new Error("Cart already created...!");
    }
    const cart = await cartService.createCart(reqBody);
    if (!cart) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Cart created successfully...!",
      data: cart,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getCartList = async (req, res) => {
  try {
    const cart_list = await cartService.getCartList();
    if (!cart_list) {
      throw new Error("Cart list data does not exist ...!");
    }
    res.status(200).json({
      success: true,
      message: "Cart list successfully...!",
      data: cart_list,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateCart = async (req, res) => {
  try {
    const cartExist = await cartService.getCartById(req.params.cartId);
    if (!cartExist) {
      throw new Error("Cart does not exist ...!");
    }
    const updated = await cartService.updateCart(req.params.cartId, req.body);
    if (!updated) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Cart updated successfully...!",
      data: req.body,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteCart = async (req, res) => {
  try {
    const cartExist = await cartService.getCartById(req.params.cartId);
    if (!cartExist) {
      throw new Error("Cart does not exist ...!");
    }
    const cart_delete = await cartService.deleteCart(req.params.cartId);
    if (!cart_delete) {
      throw new Error("Something went wrong, please try again or later! ");
    }
    res.status(200).json({
      success: true,
      message: "Cart deleted successfully...!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createCart,
  getCartList,
  updateCart,
  deleteCart,
};
