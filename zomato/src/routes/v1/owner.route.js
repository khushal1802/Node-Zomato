const express = require("express");
const { ownerValidation } = require("../../validations");
const { ownerController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// Create owner
router.post(
  "/create-owner",
  validate(ownerValidation.createOwner),
  ownerController.createOwner
);

// List owner
router.get(
  "/list",
  ownerController.getOwnerList
);

// Update owner
router.put(
  "/update-owner/:id",
  ownerController.updateOwner
);

// Delete owner
router.delete(
  "/delete-owner/:Id",
  ownerController.deleteOwner
);

module.exports=router