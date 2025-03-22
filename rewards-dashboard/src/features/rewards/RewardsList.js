import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRewards, addToCart } from './rewardsSlice';
import './RewardsList.css';

const RewardsList = () => {
  const dispatch = useDispatch();
  const { rewards, status, error } = useSelector((state) => state.rewards);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRewards());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="rewards-list">
      <h2>Available Rewards</h2>
      <div className="reward-items">
        {rewards.map((reward) => (
          <div key={reward.id} className="reward-card">
            <img src={reward.image} alt={reward.name} />
            <h3>{reward.name}</h3>
            <p>{reward.description}</p>
            <p><strong>Cost:</strong> {reward.points} points</p>
            <button onClick={() => dispatch(addToCart(reward))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RewardsList;
