const { stateService } = require("../services");

/** create state */
const createState = async (req, res) => {
  try {
    const reqBody = req.body;
    const stateExist = await stateService.getStateByName(reqBody.state_name);
    if (stateExist) {
      throw new Error(`${stateExist.state_name} state already created.`);
    }
    const state = await stateService.createState(reqBody);
    if (!state) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      succsess: true,
      message: "state create successfully!",
      data: { state },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get state list */
const getStateList = async (req, res) => {
  try {
    const getList = await stateService.getStateList(req, res);

    res.status(200).json({
      success: true,
      message: "Get state list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** state details update by id */
const updateState = async (req, res) => {
  try {
    const stateId = req.params.stateId;
    const stateExists = await stateService.getStateById(stateId);
    if (!stateExists) {
      throw new Error("state not found!");
    }

    await stateService.updateState(stateId, req.body);

    res
      .status(200)
      .json({ success: true, message: "state details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete state */
const deleteState = async (req, res) => {
  try {
    const stateId = req.params.stateId;
    const stateExists = await stateService.getStateById(stateId);
    if (!stateExists) {
      throw new Error("state not found!");
    }

    await stateService.deleteState(stateId);

    res.status(200).json({
      success: true,
      message: "state delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createState,
  getStateList,
  updateState,
  deleteState,
};
