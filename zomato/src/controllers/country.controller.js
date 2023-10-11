const { countryService } = require("../services");

/** create Country */
const createCountry = async (req, res) => {
  try {
    const reqBody = req.body;
    const countryExist = await countryService.getCountryByName(
      reqBody.country_name
    );
    if (countryExist) {
      // throw new Error("Country already exist")
      throw new Error(`${countryExist.country_name} country already created.`);
    }
    const country = await countryService.createCountry(reqBody);
    if (!country) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      succsess: true,
      message: "Country create successfully!",
      data: reqBody,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get Country list */
const getCountryList = async (req, res) => {
  try {
    const getList = await countryService.getCountryList(req, res);

    res.status(200).json({
      success: true,
      message: "Get Country list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** country details update by id */
const updateCountry = async (req, res) => {
  try {
    const countryId = req.params.countryId;
    const countryExists = await countryService.getCountryById(countryId);
    if (!countryExists) {
      throw new Error("country not found!");
    }

    await countryService.updateCountry(countryId, req.body);

    res.status(200).json({ success: true, message: "country details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete country */
const deleteCountry = async (req, res) => {
  try {
    const countryId = req.params.countryId;
    const countryExists = await countryService.getCountryById(countryId);
    if (!countryExists) {
      throw new Error("country not found!");
    }

    await countryService.deleteCountry(countryId);

    res.status(200).json({
      success: true,
      message: "country delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createCountry,
  getCountryList,
  updateCountry,
  deleteCountry,
};