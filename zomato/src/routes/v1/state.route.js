const express = require("express");
const validate = require("../../middlewares/validate");
const { stateValidation } = require("../../validations");
const { stateController } = require("../../controllers");

const router = express.Router();

// create state
router.post(
  "/create-state",
  validate(stateValidation.createState),
  stateController.createState
);

// state list
router.get("/list", stateController.getStateList);

// state update
router.put("/update-state/:stateId", stateController.updateState);

// state delete
router.delete("/delete-state/:stateId", stateController.deleteState);

module.exports = router;
