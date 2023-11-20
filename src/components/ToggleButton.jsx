import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../features/darkMode/darkModeSlice';

const ToggleButton = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.darkMode);

    const handleToggle = () => {
        dispatch(setDarkMode(!isDarkMode));
    };

    return (
        <button onClick={handleToggle}>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </button>
      );
 };

export default ToggleButton;
