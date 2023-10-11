const express = require("express");
const validate = require("../../middlewares/validate");
const { adminValidation } = require("../../validations");
const { adminController } = require("../../controllers");
const auth=require("../../middlewares/auth")

const router = express.Router();

// Create admin
router.post(
  "/create-admin",
  auth(),
  validate(adminValidation.createAdmin),
  adminController.createAdmin
);

// admin list
router.get("/list", auth(),adminController.getAdminList);

// Update admin with id
router.put(
  "/update-admin/:adminId",
  auth(),
  adminController.updateAdmin
);

// Delete admin by id
router.delete("/delete-admin/:adminId", auth(), adminController.deleteAdmin);

module.exports = router;
