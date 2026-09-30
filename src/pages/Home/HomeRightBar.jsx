import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const HomeRightBar = () => {
  const { suggestions, upcomingEvents, trendingHashtags } = useContext(UserContext);
  const navigate = useNavigate();

  // Action Handlers
  const handleConnect = (name) => {
    alert(`Connection request sent to ${name}!`);
  };

  const handleEventClick = (title) => {
    alert(`Opening details for: ${title}`);
  };

  const handleHashtagClick = (tag) => {
    alert(`Searching for posts with ${tag}...`);
  };

  return (
    <div className="flex flex-col gap-6 max-h-screen pb-20">

      {/* People You May Know Section */}
      <div className="as-card p-5">
        <h3 className="font-sora text-sm mb-4 px-1">People You May Know</h3>
        <div className="flex flex-col gap-4">
          {suggestions?.map((person) => (
            <div key={person.id} className="flex items-center justify-between group">
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-input-bg flex items-center justify-center text-text-muted font-bold text-xs border border-border-subtle group-hover:border-primary-violet transition-colors">
                  {person.avatar}
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-tight group-hover:text-primary-violet transition-colors">{person.name}</h4>
                  <p className="text-[10px] text-text-muted">{person.role}</p>
                </div>
              </div>
              <button
                onClick={() => handleConnect(person.name)}
                className="text-[10px] font-bold text-primary-soft bg-accent px-3 py-1.5 rounded-full hover:bg-primary-violet hover:text-white transition-all active:scale-90"
              >
                Add
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="as-card p-5">
        <div className="flex justify-between items-center mb-4 px-1">
          <h3 className="font-sora text-sm">Upcoming Events</h3>
          <button
            onClick={() => navigate('/events')}
            className="text-[10px] font-bold text-primary-violet hover:underline"
          >
            See all →
          </button>
        </div>
        <div className="flex flex-col gap-5">
          {upcomingEvents?.map((ev) => (
            <div
              key={ev.id}
              onClick={() => handleEventClick(ev.title)}
              className="flex gap-4 items-center group cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-accent border border-border-strong group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="text-[10px] font-bold leading-none">{ev.day}</span>
                <span className="text-[11px] font-extrabold">{ev.month}</span>
              </div>
              <div>
                <h4 className="text-xs font-bold group-hover:text-primary-violet transition-colors">{ev.title}</h4>
                <p className="text-[10px] text-text-muted">{ev.location} • {ev.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Section */}
      <div className="as-card p-5">
        <h3 className="font-sora text-sm mb-4 px-1">Trending on AlumSync</h3>
        <div className="flex flex-col gap-4">
          {trendingHashtags?.map((item, index) => (
            <div
              key={item.tag}
              onClick={() => handleHashtagClick(item.tag)}
              className="flex items-start gap-4 group cursor-pointer"
            >
              <span className="text-sm font-bold text-border-subtle group-hover:text-primary-violet transition-colors">
                {index + 1}
              </span>
              <div>
                <h4 className="text-xs font-bold text-text-main group-hover:text-primary-violet transition-colors">{item.tag}</h4>
                <p className="text-[10px] text-text-muted">{item.posts} posts</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career CTA Card — intentionally kept as a fixed dark accent card in both themes */}
      <div className="as-card p-5 bg-gradient-to-br    from-[#2a2733] to-primary text-white border-none shadow-glow">
        <span className="text-[20px]">🎓</span>
        <h3 className="font-sora text-sm mt-3 leading-tight">Find Your Mentor</h3>
        <p className="text-[10px] text-white/80 mt-2 leading-relaxed">
          340+ verified alumni mentors ready to guide you.
        </p>
        <button
          onClick={() => navigate('/mentor')}
          className="w-full mt-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 py-2 rounded-xl text-xs font-bold backdrop-blur-md transition-all active:scale-95"
        >
          Browse Mentors →
        </button>
      </div>

    </div>
  );
};

export default HomeRightBar;