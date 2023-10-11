const { contactService } = require("../services");

const createContact = async (req, res) => {
  try {
    const reqBody = req.body;
    const Contact = await contactService.createContact(reqBody);
    if (!Contact) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Contact create successfully!",
      data: { Contact },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getContactList = async (req, res) => {
  try {
    const Contact = await contactService.getContactList();

    if (!Contact) {
      throw new Error("Something wen twrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Contact List Successfully!",
      data: { Contact },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateContact = async (req, res) => {
  try {
    const contactId = req.params.contactId;
    const Contact = await contactService.getContactById(contactId);
    if (!Contact) {
      throw new Error("Contact not found!");
    }
    await contactService.updateContact(contactId, req.body);
    res.status(200).json({
      success: true,
      message: "Contact Successfully Updated",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteContact = async (req, res) => {
  try {
    const contactId = req.params.Id;
    const Contact = await contactService.getContactById(contactId);
    if (!Contact) {
      throw new Error("User not found!");
    }
    await contactService.deleteContact(contactId);
    res.status(200).json({
      success: true,
      message: "Contact Successfully Delete",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createContact,
  getContactList,
  deleteContact,
  updateContact,
};
