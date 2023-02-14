import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator';
// import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
      {/* <AppNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
