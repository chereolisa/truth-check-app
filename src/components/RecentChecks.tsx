// src/components/RecentChecks.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface RecentCheck {
  text: string;
  timestamp: number;
}

interface RecentChecksProps {
  recentChecks: RecentCheck[];
}

const RecentChecks: React.FC<RecentChecksProps> = ({ recentChecks }) => {
  // Function to format the time difference (e.g., "X minutes ago")
  const timeAgo = (timestamp: number) => {
    const now = Date.now();
    const diffInSeconds = Math.floor((now - timestamp) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  };

  return (
    <div className='recent-checks'>
      <h2 style={{ fontSize: '24px', color: 'rgba(31, 59, 115, 1)' }}>
        <i className="far fa-clock" style={{ fontSize: '24px', color: 'rgba(31, 59, 115, 1)' }}></i>
        &nbsp;Recent Checks
      </h2>
      <aside className='recent-checks-list'>
        <ul>
          {recentChecks.map((check, index) => (
            <li key={index}>
              <div>
                <Link to="/src/pages/VerifyNow.tsx">{check.text}</Link>
                <div className="time-ago">{timeAgo(check.timestamp)}</div>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default RecentChecks;
