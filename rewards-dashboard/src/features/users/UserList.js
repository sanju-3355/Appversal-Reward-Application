import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './usersSlice';
import './UserList.css';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="user-list">
      <h2>User Leaderboard</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.points} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
