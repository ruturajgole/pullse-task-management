import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      document.cookie = `token=${action.payload}`;
      return { isAuthenticated: true, token: action.payload };
    },
    logout: (state) => {
      document.cookie = "";
      return { isAuthenticated: false, token: null };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
