import { MainThemeProvider } from './src/theme/ThemeContext';
import React from 'react';
import AppWrapper from '@/Components/AppWrapper/Index';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import AppNavigator from '@/Navigation/AppNavigator';

const App: React.FC = () => {
  const navigationRef = React.useRef<NavigationContainerRef<any>>(null);

  return (
    <MainThemeProvider>
      <AppWrapper>
        <NavigationContainer ref={navigationRef}>
          <AppNavigator navigation={navigationRef.current as any} />
        </NavigationContainer>
      </AppWrapper>
    </MainThemeProvider>
  );
};

export default App;
