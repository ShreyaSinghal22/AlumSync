const API_BASE_URL = "http://localhost:5000/api/v1";

export const fetchHealthStatus = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    if (!response.ok) throw new Error("Failed to fetch health status");
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

//central axios or base fetch client 