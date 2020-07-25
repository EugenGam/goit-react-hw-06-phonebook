import { createReducer } from '@reduxjs/toolkit';
import filterActions from './filterActions';

const filterReducer = createReducer('', {
  [filterActions.filterAdd.type]: (state, action) => action.payload,
});

export default filterReducer;
