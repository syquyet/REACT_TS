import { createSlice } from "@reduxjs/toolkit";
export interface UserLogin {
  email: string;
  password: string;
  [key: string]: string;
}
export interface AuthState {
  isLoggedIn: boolean;
  user: UserLogin | null | undefined;
  loading: boolean;
}
const initialState: AuthState = {
  isLoggedIn: false,
  user: {
    email: "quyet@gmail.com",
    password: "11",
  },
  loading: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
});
export default authSlice.reducer;
