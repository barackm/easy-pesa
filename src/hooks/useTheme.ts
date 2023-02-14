import React from 'react';
import { ThemeContext } from '../theme/ThemeProvider';

const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context.theme;
};

export default useTheme;
