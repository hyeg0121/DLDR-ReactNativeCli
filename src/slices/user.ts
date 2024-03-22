import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  id: '',
  name: '',
  email: '',
  profileImg: '',
  userType: '',
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.profileImg = action.payload.profileImg;
      state.userType = action.payload.userType;
    },
  },
  extraReducers: builder => {},
});

export default userSlice;
