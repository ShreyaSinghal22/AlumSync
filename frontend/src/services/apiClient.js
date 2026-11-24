
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/v1";

// Reusable API request handler
const apiRequest = async (endpoint, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  const result = await response.json();

  if (!response.ok || result.success === false) {
    throw new Error(result.message || "API request failed");
  }

  return result;
};

// Backend health check
export const fetchHealthStatus = async () => {
  return apiRequest("/health");
};

// Fetch all alumni from Supabase through the backend
export const fetchAlumni = async () => {
  const result = await apiRequest("/alumni");
  return result.data;
};
