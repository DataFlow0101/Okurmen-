import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uid: null,
  email: '',
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.username = action.payload.username;
    },
    clearUser(state) {
      state.uid = null;
      state.email = '';
      state.username = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
