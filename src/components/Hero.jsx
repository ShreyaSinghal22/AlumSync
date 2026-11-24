export default function Hero() {
  const handleClick = () => {
    const section = document.getElementById("feature");
    if(section) {
      section.scrollIntoView({behavior:"smooth"});
    }
  };
  return (
    <section id ="home" className="hero">
        <div className="hero-bg"></div>
        <div className="hero-blob1"></div>
        <div className="hero-blob2"></div>
        <div className="hero-inner">
      <div className="hero-content">
            <div className="hero-title">
        <h1>
          Reconnect, Engage & Grow with <span>AlumSync</span>
        </h1>
        </div>
        <p>
          A unified platform that bridges the gap between students and alumni - fostering mentorship,networking,and lifelong institutional bonds.
        </p>
            <div className="hero-pills">
            <span class="hpill">Live Networking</span>
            <span class="hpill">Job Board</span>
            <span class="hpill">Events</span>
            <span class="hpill">Mentorship</span>
        </div>
        </div>
        <div class=".hero-visual">
        <svg viewBox="0 0 380 320" width="380" height="320" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="hg" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#6d28d9" stop-opacity="0.25"></stop><stop offset="100%" stop-color="#6d28d9" stop-opacity="0"></stop></radialGradient></defs>
        <rect x="20" y="20" width="340" height="280" rx="18" fill="#111114" stroke="rgba(255,255,255,0.07)" stroke-width="1"></rect>
        <circle cx="190" cy="148" r="90" fill="url(#hg)"></circle>
        <circle cx="190" cy="148" r="50" fill="#16101f" stroke="#6d28d9" stroke-width="1.5"></circle>
        <circle cx="190" cy="148" r="37" fill="#1c1030"></circle>
        <text x="190" y="143" text-anchor="middle" font-family="Sora,sans-serif" font-weight="900" font-size="13" fill="#a78bfa">Alum</text>
        <text x="190" y="160" text-anchor="middle" font-family="Sora,sans-serif" font-weight="900" font-size="13" fill="#fff">Sync</text>
        <g transform="translate(72,62)"><circle cx="0" cy="0" r="28" fill="#1a1a22" stroke="rgba(56,189,248,0.3)" stroke-width="1"></circle><circle cx="0" cy="-6" r="11" fill="#fde68a"></circle><path d="M-10 9 Q0 4 10 9 L12 22 L-12 22 Z" fill="#38bdf8"></path><rect x="-12" y="-19" width="24" height="4" rx="1" fill="#0369a1"></rect><polygon points="0,-24 -12,-16 12,-16" fill="#0369a1"></polygon><line x1="8" y1="-19" x2="14" y2="-11" stroke="#fbbf24" stroke-width="1.5"></line><circle cx="14" cy="-11" r="2.5" fill="#fbbf24"></circle><text x="0" y="36" text-anchor="middle" font-family="Plus Jakarta Sans,sans-serif" font-size="10" fill="rgba(56,189,248,0.8)">Student</text></g>
        <g transform="translate(308,62)"><circle cx="0" cy="0" r="28" fill="#1a1a22" stroke="rgba(16,185,129,0.3)" stroke-width="1"></circle><circle cx="0" cy="-6" r="11" fill="#fde68a"></circle><path d="M-10 9 Q0 4 10 9 L12 22 L-12 22 Z" fill="#10b981"></path><rect x="-3" y="5" width="5" height="10" rx="1" fill="#fbbf24"></rect><polygon points="0,2 -5,8 5,8" fill="#fbbf24"></polygon><text x="0" y="36" text-anchor="middle" font-family="Plus Jakarta Sans,sans-serif" font-size="10" fill="rgba(16,185,129,0.8)">Alumni</text></g>
        <g transform="translate(72,232)"><circle cx="0" cy="0" r="28" fill="#1a1a22" stroke="rgba(167,139,250,0.3)" stroke-width="1"></circle><circle cx="0" cy="-6" r="11" fill="#fde68a"></circle><path d="M-10 9 Q0 4 10 9 L12 22 L-12 22 Z" fill="#7c3aed"></path><text x="0" y="36" text-anchor="middle" font-family="Plus Jakarta Sans,sans-serif" font-size="10" fill="rgba(167,139,250,0.8)">Admin</text></g>
        <g transform="translate(308,232)"><circle cx="0" cy="0" r="28" fill="#1a1a22" stroke="rgba(251,191,36,0.3)" stroke-width="1"></circle><circle cx="0" cy="-6" r="11" fill="#fde68a"></circle><path d="M-10 9 Q0 4 10 9 L12 22 L-12 22 Z" fill="#d97706"></path><rect x="-7" y="-17" width="12" height="14" rx="1" fill="#fef3c7" stroke="#d97706" stroke-width="0.5"></rect><text x="0" y="36" text-anchor="middle" font-family="Plus Jakarta Sans,sans-serif" font-size="10" fill="rgba(251,191,36,0.8)">Mentor</text></g>
        <line x1="100" y1="90" x2="155" y2="128" stroke="rgba(56,189,248,0.3)" stroke-width="1.5" stroke-dasharray="4,3"></line>
        <line x1="280" y1="90" x2="225" y2="128" stroke="rgba(16,185,129,0.3)" stroke-width="1.5" stroke-dasharray="4,3"></line>
        <line x1="100" y1="218" x2="155" y2="168" stroke="rgba(167,139,250,0.3)" stroke-width="1.5" stroke-dasharray="4,3"></line>
        <line x1="280" y1="218" x2="225" y2="168" stroke="rgba(251,191,36,0.3)" stroke-width="1.5" stroke-dasharray="4,3"></line>
        <g transform="translate(118,218)"><rect x="0" y="0" width="76" height="26" rx="6" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.25)" stroke-width="0.8"></rect><circle cx="12" cy="13" r="5" fill="#10b981"></circle><text x="22" y="16" font-family="Plus Jakarta Sans,sans-serif" font-size="9" fill="rgba(16,185,129,0.9)">Job Posted!</text></g>
        <g transform="translate(185,55)"><rect x="0" y="0" width="80" height="26" rx="6" fill="rgba(251,191,36,0.1)" stroke="rgba(251,191,36,0.25)" stroke-width="0.8"></rect><text x="9" y="10" font-size="10">📅</text><text x="23" y="16" font-family="Plus Jakarta Sans,sans-serif" font-size="9" fill="rgba(251,191,36,0.9)">Event: Today!</text></g>
        <g transform="translate(200,195)"><rect x="0" y="0" width="90" height="26" rx="6" fill="rgba(167,139,250,0.1)" stroke="rgba(167,139,250,0.25)" stroke-width="0.8"></rect><text x="9" y="10" font-size="10">💬</text><text x="23" y="16" font-family="Plus Jakarta Sans,sans-serif" font-size="9" fill="rgba(167,139,250,0.9)">New Message!</text></g>
      </svg>
      </div>

        <div className="hero-buttons">
          <button className="primary-btn" onClick={() => {
                    document.getElementById("auth")?.scrollIntoView({ behavior: "smooth" });
                    window.location.hash = "auth?mode=signup";
                }}>Get Started Free →</button>
          <button className="secondary-btn" onClick={handleClick}>Explore Features</button>
        </div>
      </div>
    </section>
  );
}