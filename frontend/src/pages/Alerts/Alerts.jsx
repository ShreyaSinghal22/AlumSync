import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Alerts = () => {
  const { notifications, markNotificationRead, markAllNotificationsRead, loading } = useContext(UserContext);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-6 h-[calc(100vh-70px)] overflow-y-auto no-scrollbar">
      <div className="flex items-start justify-between flex-wrap gap-2">
        <div>
          <h1 className="font-sora text-2xl font-bold text-text-main">Notifications</h1>
          <p className="text-sm text-text-muted mt-1 mb-6">Stay updated on your network activity</p>
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllNotificationsRead}
            className="text-xs font-bold text-primary-violet hover:underline mt-1"
          >
            Mark all as read ({unreadCount})
          </button>
        )}
      </div>

      {/* Loading state */}
      {loading && (
        <div className="as-card p-10 text-center text-text-muted text-sm">Loading notifications...</div>
      )}

      {/* Empty state */}
      {!loading && notifications?.length === 0 && (
        <div className="as-card p-10 text-center text-text-muted text-sm">
          You're all caught up — no notifications yet.
        </div>
      )}

      {/* Notification List */}
      {!loading && notifications?.length > 0 && (
        <div className="as-card overflow-hidden">
          {notifications.map((n, i) => (
            <div
              key={n.id}
              onClick={() => markNotificationRead(n.id)}
              className={`flex items-start gap-3 px-4 py-3.5 cursor-pointer transition-colors hover:bg-hover-bg ${
                i !== notifications.length - 1 ? 'border-b border-border-subtle' : ''
              } ${!n.read ? 'bg-accent' : ''}`}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-[11px] text-white flex-shrink-0"
                style={{ background: n.avatarColor }}
              >
                {n.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12.5px] text-text-muted leading-relaxed">
                  <strong className="text-text-main">{n.name}</strong> {n.message}
                </p>
              </div>
              <span className="text-[11px] text-text-muted whitespace-nowrap flex-shrink-0">{n.time}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Alerts;