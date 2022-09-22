import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'fetch',
  initialState: [],
  reducers: {
    greetings: (state, action) => [...state, action.payload.message],
  },
};

export const greetingSlice = createSlice(options);

export const { greetings } = greetingSlice.actions;

export default greetingSlice.reducer;

// Get greetings action
export const fetchGreeting = () => async (dispatch) => {
  const random = Math.floor(Math.random() * 5);

  const response = await fetch(`http://localhost:3000/api/messages/${random}`);
  const greeting = await response.json();
  dispatch(greetings(greeting));
};
