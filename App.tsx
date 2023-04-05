import { MainThemeProvider } from './src/theme/ThemeContext';
import React from 'react';
import AppWrapper from '@/Components/AppWrapper/Index';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '@/Navigation/AppNavigator';

const App: React.FC = () => {
  return (
    <MainThemeProvider>
      <AppWrapper>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AppWrapper>
    </MainThemeProvider>
  );
};

export default App;
