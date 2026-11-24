export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="ft-grid">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-box">AS</span>
            <h3 className="logo-name">Alum<span>Sync</span></h3>
          </div>
          <p>
            Bridging the gap between students and alumni — one connection at a
            time. Built with care as a final year project.
          </p>
        </div>

        {/* Platform */}
        <div className="footer-links">
          <h4>PLATFORM</h4>
          <ul>
            <a>Alumni Directory</a>
            <a>Job Board</a>
            <a>Mentorship</a>
            <a>Events</a>
            <a>Analytics</a>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-links">
          <h4>COMPANY</h4>
          <ul>
            <a>About Us</a>
            <a>Our Team</a>
            <a>Blog</a>
            <a>Contact</a>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-links">
          <h4>LEGAL</h4>
          <ul>
            <a>Privacy Policy</a>
            <a>Terms of Use</a>
            <a>Cookie Policy</a>
          </ul>
        </div>

      </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 AlumSync  —  All rights reserved.</p>

        <div className="tech-stack">
          <span className="tag">React.js</span>
          <span className="tag">Node.js</span>
          <span className="tag">MongoDB</span>
        </div>
      </div>
    </section>
  );
}