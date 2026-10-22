import * as alumniService from "../../services/alumniservice.js";

export const getAlumni = async (req, res) => {
  try {
    const alumni = await alumniService.fetchAllAlumni();
    res.status(200).json({ success: true, data: alumni });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};