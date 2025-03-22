import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addNotification } from '../notifications/notificationsSlice';
import axios from 'axios';

// Fetch rewards from API
export const fetchRewards = createAsyncThunk('rewards/fetchRewards', async () => {
  const response = await axios.get('http://localhost:5000/rewards');
  return response.data;
});

// Initial state
const initialState = {
  rewards: [],
  cart: [],
  status: 'idle',
  error: null,
  userPoints: 100,
};

const rewardsSlice = createSlice({
  name: 'rewards',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    redeemReward: (state, action) => {
      const reward = action.payload;
      if (state.userPoints >= reward.points) {
        state.userPoints -= reward.points;
        state.rewards.push(reward);
        action.asyncDispatch(addNotification(`Redeemed ${reward.name} for ${reward.points} points!`));
      } else {
        action.asyncDispatch(addNotification('Not enough points!'));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRewards.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchRewards.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rewards = action.payload;
      })
      .addCase(fetchRewards.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addToCart, removeFromCart, clearCart, redeemReward } = rewardsSlice.actions;
export default rewardsSlice.reducer;
