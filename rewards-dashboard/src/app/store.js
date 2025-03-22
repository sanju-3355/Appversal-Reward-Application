import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import rewardsReducer from '../features/rewards/rewardsSlice';
import notificationsReducer from '../features/notifications/notificationsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    rewards: rewardsReducer,
    notifications: notificationsReducer,
  },
});

export default store;
