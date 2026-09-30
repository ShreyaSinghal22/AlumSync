import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Network = () => {
  const { networkStats, userData, alumniDirectory, loading } = useContext(UserContext);

  const handleConnect = (name) => {
    alert(`Connection request sent to ${name}!`);
  };

  const handleMessage = (name) => {
    alert(`Opening chat with ${name}...`);
  };

  const stats = [
    { num: networkStats?.totalAlumni ?? '—', label: 'Total Alumni', chg: '↑ +234 this month', up: true },
    { num: userData?.stats?.connections ?? '—', label: 'Your Connections', chg: '↑ +8 this week', up: true },
    { num: networkStats?.onlineNow ?? '—', label: 'Online Now', chg: '● Active', up: true },
    { num: networkStats?.responseRate ?? '—', label: 'Response Rate', chg: 'Excellent', up: true },
  ];

  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-6 h-[calc(100vh-70px)] overflow-y-auto no-scrollbar">
      <h1 className="font-sora text-2xl font-bold text-text-main">Alumni Network</h1>
      <p className="text-sm text-text-muted mt-1 mb-6">
        Discover and connect with 12,000+ verified alumni
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
        <div className="as-card p-10 text-center text-text-muted text-sm">Loading alumni directory...</div>
      )}

      {/* Empty state */}
      {!loading && alumniDirectory?.length === 0 && (
        <div className="as-card p-10 text-center text-text-muted text-sm">
          No alumni profiles to show yet.
        </div>
      )}

      {/* Alumni Grid */}
      {!loading && alumniDirectory?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {alumniDirectory.map((person) => (
            <div
              key={person.id}
              className="as-card p-4 hover:border-primary/40 transition-all"
            >
              <div
                className="w-[50px] h-[50px] rounded-full flex items-center justify-center font-extrabold text-[15px] text-white mb-2.5"
                style={{ background: person.avatarColor }}
              >
                {person.avatar}
              </div>
              <div className="font-bold text-sm text-text-main">{person.name}</div>
              <div className="text-xs text-text-muted mt-0.5">{person.role}</div>
              <div className="text-[11px] text-accent-violet font-semibold mt-1">{person.batch}</div>

              <div className="flex flex-wrap gap-1.5 mt-2">
                {person.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10.5px] font-semibold px-2 py-0.5 rounded bg-accent text-primary-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-1.5 mt-2.5">
                <button
                  onClick={() => handleConnect(person.name)}
                  className="text-xs font-bold text-white bg-primary-violet px-3 py-1.5 rounded-lg hover:opacity-90 transition-all active:scale-95"
                >
                  Connect
                </button>
                <button
                  onClick={() => handleMessage(person.name)}
                  className="text-xs font-bold text-primary-violet border border-border-subtle px-3 py-1.5 rounded-lg hover:bg-hover-bg transition-all active:scale-95"
                >
                  Message
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Network;