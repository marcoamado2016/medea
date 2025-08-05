import { createSlice } from "@reduxjs/toolkit";
const initial = {
  estado: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initial,
  reducers: {
    login: (state, action) => {
        console.log("AA",action.payload)
      state.estado = action.payload.estado;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
