import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: Boolean(false),
  reducers: {
    changeSidebar(state) {
      return (state = !state);
    },
  },
});

export const { changeSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
