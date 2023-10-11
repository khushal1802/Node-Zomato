const express = require("express");
const validate = require("../../middlewares/validate");
const { contactValidation } = require("../../validations");
const { contactController } = require("../../controllers");

const router = express.Router();

// create contact
router.post(
  "/create-contact",
  validate(contactValidation.createContact),
  contactController.createContact
);

//contact list
router.get("/list", contactController.getContactList);

//contact update
router.put("/update-contact/:contactId", contactController.updateContact);

//contact delete
router.delete("/delete-contact/:contactId", contactController.deleteContact);

module.exports = router;
