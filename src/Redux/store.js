import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactReducer';
import filterReducer from './filterReducer';
import themeReducer from './themeReducer';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    theme: themeReducer,
  },
});

export default store;
