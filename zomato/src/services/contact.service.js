const Contact = require("../models");

const createContact = async (reqBody) => {
  return Contact.create(reqBody);
};

const getContactList = async () => {
  return Contact.find().populate("user");
};

const getContactById = async (contactId) => {
  return Contact.findById(contactId);
};

const updateContact = async (contactId, updatebody) => {
  return Contact.findByIdAndUpdate(contactId, { $set: updatebody });
};

const deleteContact = async (contactId) => {
  return Contact.findByIdAndDelete(contactId);
};

module.exports = {
  createContact,
  getContactList,
  getContactById,
  updateContact,
  deleteContact,
};
