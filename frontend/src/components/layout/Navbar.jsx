import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useTheme } from '../../context/ThemeContext';
import Logo from './Logo';

const Navbar = ({ onToggleSidebar }) => {
  const { userData } = useContext(UserContext);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="glass-header relative h-[70px] flex items-center px-4 sm:px-6 lg:px-8 justify-between w-full gap-3">

      {/* Sidebar toggle — only shown where the persistent sidebar is hidden (below md) */}
      <button
        onClick={onToggleSidebar}
        aria-label="Toggle navigation menu"
        className="md:hidden w-9 h-9 rounded-full border border-border-subtle bg-input-bg flex items-center justify-center text-base hover:bg-hover-bg transition-all active:scale-90 flex-shrink-0"
      >
        ☰
      </button>

      {/* Branding */}
      <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
        <Logo className="w-10 h-10 transition-transform group-hover:scale-110 duration-300 shadow-glow" />
        <div className="hidden sm:flex flex-col">
          <span className="font-sora text-xl font-extrabold tracking-tight text-text-main transition-colors duration-300">
            AlumSync
          </span>
        </div>
      </Link>

      {/* Enhanced Search — takes the space nav links used to occupy */}
      <div className="flex-1 min-w-0 max-w-[160px] sm:max-w-sm md:max-w-lg lg:max-w-xl mx-1 sm:mx-6 md:mx-10">
        <div className="relative group">
          <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary-violet transition-colors">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search alumni, companies, events..."
            className="w-full bg-input-bg border border-input-border focus:border-primary-violet focus:bg-card-bg rounded-full py-2.5 pl-9 sm:pl-12 pr-3 sm:pr-4 outline-none text-sm text-text-main placeholder:text-text-muted transition-all shadow-inner"
          />
        </div>
      </div>

      {/* Theme Toggle + Avatar — navigation lives in the sidebar now, not here */}
      <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
        <button
          onClick={toggleTheme}
          title="Toggle theme"
          aria-label="Toggle dark and light theme"
          className="w-9 h-9 rounded-full border border-border-subtle bg-input-bg flex items-center justify-center text-base hover:bg-hover-bg transition-all active:scale-90 flex-shrink-0"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        <Link to="/profile" className="flex items-center gap-2 cursor-pointer group flex-shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary-violet to-accent-violet flex items-center justify-center text-white font-bold text-sm ring-2 ring-offset-2 ring-offset-[var(--bg-main)] ring-transparent group-hover:ring-primary transition-all">
            {userData?.avatar || 'AM'}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;