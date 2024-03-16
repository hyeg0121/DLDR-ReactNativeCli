import {combineReducers} from '@reduxjs/toolkit';
import userSlice from '../slices/user.ts';

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
