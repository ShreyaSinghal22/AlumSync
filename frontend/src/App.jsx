import { useEffect, useState } from "react";
import fetchHealthStatus from "./services/apiClient";

function App() {
  const [backendStatus, setBackendStatus] = useState("Connecting to backend...");

  useEffect(() => {
    fetchHealthStatus()
      .then((data) => {
        console.log("Backend response:", data);
        // This pulls from your service -> controller JSON structure!
        setBackendStatus(data.data.status); 
      })
      .catch((err) => {
        console.error(err);
        setBackendStatus("Connection failed ❌");
      });
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>AlumSync Dashboard</h1>
      <p>
        Backend Status: <strong>{backendStatus}</strong>
      </p>
    </div>
  );
}

export default App;