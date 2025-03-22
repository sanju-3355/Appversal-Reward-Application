import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivities } from './activitiesSlice';
import './ActivityFeed.css';

const ActivityFeed = () => {
  const dispatch = useDispatch();
  const { activities, status, error } = useSelector((state) => state.activities);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchActivities());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="activity-feed">
      <h2>Recent Activities</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.user}: {activity.action} ({activity.points} points)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
