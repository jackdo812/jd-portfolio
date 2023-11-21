import { createSlice } from '@reduxjs/toolkit';

// Load the initial dark mode state from local storage
const loadDarkModeFromStorage = () => {
  let isDarkMode = localStorage.getItem('isDarkMode');
  if (isDarkMode === null) {
    isDarkMode = false;
  } else {
    isDarkMode = JSON.parse(isDarkMode);
  }
  return isDarkMode;
};

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    isDarkMode: loadDarkModeFromStorage(),
  },
  reducers: {
    setDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
      // Save to local storage when the state changes
      localStorage.setItem('isDarkMode', JSON.stringify(action.payload));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
