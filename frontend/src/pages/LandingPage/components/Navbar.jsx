import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav" >
      {/* Logo */}
      <a href="#home" className="logo">
        <div className="logo-mark">AS</div>
        <div className="logo-name">
          Alum<span>Sync</span>
        </div>
      </a>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Links */}
      <div className={`nav-links ${open ? "active" : ""}`}>
        <a href="#home" id="hero">Home</a>
        <a href="#about" id="aboutus">About Us</a>
        <a href="#feature" id="features">Features</a>
        <a href="#how-it-worker" id="working">How it Works</a>
        <a href="#support" id="helpsupport">Help & Support</a>
      </div>

      {/* Buttons */}
      <div className="nav-ctas">
        <button className="nav-login" onClick={() => {
          document.getElementById("auth")?.scrollIntoView({ behavior: "smooth" });
          window.location.hash = "auth?mode=login";
          setOpen(false); }}>Log In
        </button>
      <button className="nav-join" onClick={() => {
        document.getElementById("auth")?.scrollIntoView({ behavior: "smooth" });
        window.location.hash = "auth?mode=signup";
        setOpen(false); }}>Sign Up Free →
      </button>
      </div>
    </nav>
  );
  
}