const { cityService } = require("../services");

/** create city */
const createCity = async (req, res) => {
  try {
    const reqBody = req.body;
    const cityExist = await cityService.getCityByName(
      reqBody.city_name
    );
    if (cityExist) {
      throw new Error(`${cityExist.city_name} city already created.`);
    }
    const city = await cityService.createCity(reqBody);
    if (!city) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      succsess: true,
      message: "city create successfully!",
      data: { city },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get city list */
const getCityList = async (req, res) => {
  try {
    const getList = await cityService.getCityList(req, res);

    res.status(200).json({
      success: true,
      message: "Get city list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** city details update by id */
const updateCity = async (req, res) => {
  try {
    const cityId = req.params.cityId;
    const cityExists = await cityService.getCityById(cityId);
    if (!cityExists) {
      throw new Error("city not found!");
    }

    await cityService.updateCity(cityId, req.body);

    res
      .status(200)
      .json({ success: true, message: "city details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete city */
const deleteCity = async (req, res) => {
  try {
    const cityId = req.params.cityId;
    const cityExists = await cityService.getCityById(cityId);
    if (!cityExists) {
      throw new Error("city not found!");
    }

    await cityService.deleteCity(cityId);

    res.status(200).json({
      success: true,
      message: "city delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createCity,
  getCityList,
  updateCity,
  deleteCity,
};
