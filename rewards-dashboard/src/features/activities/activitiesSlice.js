import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchActivities = createAsyncThunk('activities/fetchActivities', async () => {
  const response = await axios.get('http://localhost:5000/activities');
  return response.data;
});

const activitiesSlice = createSlice({
  name: 'activities',
  initialState: { activities: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchActivities.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchActivities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.activities = action.payload;
      })
      .addCase(fetchActivities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default activitiesSlice.reducer;
