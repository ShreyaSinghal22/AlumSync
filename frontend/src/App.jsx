import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";

import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import BackendStatus from "./components/BackendStatus";

import Home from "./pages/Home/Home";
import Jobs from "./pages/Jobs/Jobs";
import Network from "./pages/Network/Network";
import Alerts from "./pages/Alerts/Alerts";
import Mentor from "./pages/Mentor/Mentor";

const Placeholder = ({ title }) => (
  <div className="flex items-center justify-center h-[calc(100vh-100px)] m-6 as-card">
    <h2 className="font-sora text-text-muted">
      {title} Page Coming Soon
    </h2>
  </div>
);

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <div className="min-h-screen bg-bg-main flex flex-col">
            <Navbar
              onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
            />

            <BackendStatus />

            <div className="flex-1 flex overflow-hidden">
              <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
              />

              <div className="flex-1 min-w-0 overflow-hidden">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/jobs" element={<Jobs />} />
                  <Route path="/network" element={<Network />} />
                  <Route path="/alerts" element={<Alerts />} />
                  <Route path="/mentor" element={<Mentor />} />
                  <Route
                    path="/messages"
                    element={<Placeholder title="Messages" />}
                  />
                  <Route
                    path="/events"
                    element={<Placeholder title="Events" />}
                  />
                  <Route
                    path="/profile"
                    element={<Placeholder title="Profile" />}
                  />
                  <Route
                    path="/settings"
                    element={<Placeholder title="Settings" />}
                  />
                  <Route
                    path="*"
                    element={<Placeholder title="404 — Not Found" />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
