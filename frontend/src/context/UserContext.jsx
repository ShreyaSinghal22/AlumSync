
import React, { createContext, useState, useEffect } from 'react';
import { fetchAlumni } from '../services/apiClient';

export const UserContext = createContext();

// Normalize real alumni records for the existing Network UI
const mapAlumniRecord = (person) => {
  const name =
    person.full_name || person.name || person.email || 'Alumni';

  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');

  return {
    ...person,
    name,
    email: person.email || '',
    avatar: person.avatar || initials || 'A',
    avatarColor: person.avatarColor || '#6366f1',
    role: person.role || person.job_title || '',
    batch: person.batch || person.graduation_year || '',
    tags: Array.isArray(person.tags) ? person.tags : [],
  };
};

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
        // 1. Load existing mock data for other dashboard modules
        try {
          const response = await fetch('/data/db.json');

          if (!response.ok) {
            throw new Error('Failed to load dashboard mock data');
          }

          const data = await response.json();

          setUserData(data.profile);
          setPosts(data.posts || []);
          setSuggestions(data.suggestions || []);
          setUpcomingEvents(data.upcomingEvents || []);
          setTrendingHashtags(data.trendingHashtags || []);
          setJobs(data.jobs || []);
          setJobStats(data.stats || null);
          setNetworkStats(data.networkStats || null);

          // Temporary fallback if the real API is unavailable
          setAlumniDirectory(data.alumniDirectory || []);

          setNotifications(data.notifications || []);
          setMentorStats(data.mentorStats || null);
          setMentors(data.mentors || []);
        } catch (mockError) {
          console.error('Error loading dashboard mock data:', mockError);
        }

        // 2. Replace only the alumni directory with real Supabase records
        try {
          const alumni = await fetchAlumni();

          const formattedAlumni = alumni.map(mapAlumniRecord);

          setAlumniDirectory(formattedAlumni);

          console.log(
            'Real alumni directory loaded:',
            formattedAlumni
          );
        } catch (apiError) {
          console.error(
            'Could not load real alumni. Keeping mock directory:',
            apiError
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Marks a single notification as read — updates local state only
  const markNotificationRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllNotificationsRead = () => {
    setNotifications((prev) =>
      prev.map((n) => ({ ...n, read: true }))
    );
  };

  return (
    <UserContext.Provider
      value={{
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
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
