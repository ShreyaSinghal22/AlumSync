import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [posts, setPosts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [trendingHashtags, setTrendingHashtags] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [jobStats, setJobStats] = useState(null);
  const [networkStats, setNetworkStats] = useState(null);
  const [alumniDirectory, setAlumniDirectory] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [mentorStats, setMentorStats] = useState(null);
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/db.json');
        const data = await response.json();

        // Mapping all arrays from db.json to state
        setUserData(data.profile);
        setPosts(data.posts);
        setSuggestions(data.suggestions);
        setUpcomingEvents(data.upcomingEvents);
        setTrendingHashtags(data.trendingHashtags);
        setJobs(data.jobs || []);
        setJobStats(data.stats || null);
        setNetworkStats(data.networkStats || null);
        setAlumniDirectory(data.alumniDirectory || []);
        setNotifications(data.notifications || []);
        setMentorStats(data.mentorStats || null);
        setMentors(data.mentors || []);

        setLoading(false);
      } catch (error) {
        console.error("Error loading AlumSync data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Marks a single notification as read — updates local state only (db.json is a static mock file)
  const markNotificationRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <UserContext.Provider value={{
      userData,
      posts,
      suggestions,
      upcomingEvents,
      trendingHashtags,
      jobs,
      jobStats,
      networkStats,
      alumniDirectory,
      notifications,
      markNotificationRead,
      markAllNotificationsRead,
      mentorStats,
      mentors,
      loading
    }}>
      {children}
    </UserContext.Provider>
  );
};