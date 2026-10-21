import * as healthservice from "../../services/healthservice.js";

export const getHealth = (req, res) => {
  const health = healthservice.getHealthStatus();

  res.status(200).json({
    success: true,
    data: health,
  });
};

