import { createReducer } from '@reduxjs/toolkit';
import themeActions from './themeActions';

const themeReducer = createReducer('lightTheme', {
  [themeActions.themeChange.type]: (state, action) => action.payload,
});

export default themeReducer;
