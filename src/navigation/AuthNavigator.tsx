import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthContainer from '../screens/auth/AuthContainer';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Auth" component={AuthContainer} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
