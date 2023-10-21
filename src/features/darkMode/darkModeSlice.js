import { createSlice } from '@reduxjs/toolkit';

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: false,
    reducers: {
      setDarkMode: (state, action) => {
        return action.payload;
      },
    },
  });
  
  // Action creators are generated for each case reducer function
  export const { setDarkMode } = darkModeSlice.actions;
  
  export default darkModeSlice.reducer;