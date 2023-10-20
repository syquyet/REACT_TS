import { createSlice } from "@reduxjs/toolkit";
export interface UserLogin {
  email: string;
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
    address: "string"
    
  },
  loading: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
});
export default authSlice.reducer;
