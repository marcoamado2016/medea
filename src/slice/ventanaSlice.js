import { createSlice } from "@reduxjs/toolkit";
const initial = {
  estado: false,
};
const ventanaSlice = createSlice({
  name: "ventana",
  initialState: initial,
  reducers: {
    ventana: (state, action) => {
      state.estado = action.payload.estado;
    },
  },
});

export const { ventana } = ventanaSlice.actions;
export default ventanaSlice.reducer;
