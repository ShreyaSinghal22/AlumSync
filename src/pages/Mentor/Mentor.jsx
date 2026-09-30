import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Mentor = () => {
  const { mentorStats, mentors, loading } = useContext(UserContext);

  const handleBookSession = (name) => {
    alert(`Requesting a session with ${name}... (booking feature coming soon)`);
  };

  const handleViewProfile = (name) => {
    alert(`Opening ${name}'s mentor profile...`);
  };

  const stats = [
    { num: mentorStats?.activeMentors ?? '—', label: 'Active Mentors', chg: 'Ongoing sessions', up: true },
    { num: mentorStats?.sessionsDone ?? '—', label: 'Sessions Done', chg: '↑ +2 this month', up: true },
    { num: mentorStats?.avgRating ?? '—', label: 'Avg Rating', chg: '⭐ Excellent', up: true },
    { num: mentorStats?.mentorsAvailable ?? '—', label: 'Mentors Available', chg: 'Active now', up: true },
  ];

  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-6 h-[calc(100vh-70px)] overflow-y-auto no-scrollbar">
      <h1 className="font-sora text-2xl font-bold text-text-main">Mentorship Portal</h1>
      <p className="text-sm text-text-muted mt-1 mb-6">
        Connect with experienced alumni for 1-on-1 guidance
      </p>

      {/* Stat Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="as-card p-4">
            <div className="font-sora text-2xl font-extrabold text-accent-violet">{s.num}</div>
            <div className="text-xs text-text-muted mt-1">{s.label}</div>
            <div className={`text-[11px] mt-1 font-semibold ${s.up ? 'text-success' : 'text-destructive'}`}>
              {s.chg}
            </div>
          </div>
        ))}
      </div>

      {/* Loading state */}
      {loading && (
        <div className="as-card p-10 text-center text-text-muted text-sm">Loading mentors...</div>
      )}

      {/* Empty state */}
      {!loading && mentors?.length === 0 && (
        <div className="as-card p-10 text-center text-text-muted text-sm">
          No mentors available right now — check back soon.
        </div>
      )}

      {/* Mentor Grid */}
      {!loading && mentors?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="as-card p-4">
              {/* Header */}
              <div className="flex items-center gap-2.5 mb-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-sm text-white flex-shrink-0"
                  style={{ background: mentor.avatarColor }}
                >
                  {mentor.avatar}
                </div>
                <div>
                  <div className="font-bold text-sm text-text-main">{mentor.name}</div>
                  <div className="text-xs text-text-muted mt-0.5">{mentor.role}</div>
                  <div className="text-[11px] text-accent-violet font-semibold mt-0.5">{mentor.batch}</div>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 my-2.5">
                {mentor.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10.5px] font-semibold px-2.5 py-1 rounded bg-accent text-primary-soft"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="bg-input-bg rounded-lg text-center py-2">
                  <div className="font-sora font-extrabold text-[15px] text-accent-violet">{mentor.mentees}</div>
                  <div className="text-[10px] text-text-muted mt-0.5">Mentees</div>
                </div>
                <div className="bg-input-bg rounded-lg text-center py-2">
                  <div className="font-sora font-extrabold text-[15px] text-accent-violet">{mentor.rating}</div>
                  <div className="text-[10px] text-text-muted mt-0.5">Rating</div>
                </div>
                <div className="bg-input-bg rounded-lg text-center py-2">
                  <div className="font-sora font-extrabold text-[15px] text-accent-violet">{mentor.availability}</div>
                  <div className="text-[10px] text-text-muted mt-0.5">Available</div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-1.5">
                <button
                  onClick={() => handleBookSession(mentor.name)}
                  className="btn-primary py-1.5 px-4 text-xs"
                >
                  Book Session
                </button>
                <button
                  onClick={() => handleViewProfile(mentor.name)}
                  className="text-xs font-bold text-primary-violet border border-border-subtle rounded-full px-4 py-1.5 hover:bg-hover-bg transition-all active:scale-95"
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Mentor;