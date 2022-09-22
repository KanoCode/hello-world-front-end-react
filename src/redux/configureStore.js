import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import greetingReducer from './greeting_reducer/greetings';

const store = configureStore({
  reducer: greetingReducer,
  middlewares: [logger, thunk],
});

export default store;
