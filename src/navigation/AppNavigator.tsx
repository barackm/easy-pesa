import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard/Dashboard';
import { getThemeColor, metrics } from '../theme';
import BottomTabButton from '../components/BottomTabButton';
import HomeIcon from '../components/svgs/HomeIcon';
import WalletIcon from '../components/svgs/WalletIcon';
import GraphIcon from '../components/svgs/GraphIcon';
import UserIcon from '../components/svgs/UserIcon';

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  const mode = 'light';
  const colors = getThemeColor(mode);

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: colors.primary[300],
        tabBarStyle: { height: metrics.moderateScale(70) },
        tabBarLabelStyle: { display: 'none' },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, focused, color }) => (
            <HomeIcon
              colors={colors}
              size={size}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, focused, color }) => (
            <WalletIcon
              colors={colors}
              color={color}
              focused={focused}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Budget"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <BottomTabButton colors={colors} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Investments"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <GraphIcon
              colors={colors}
              size={size}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <UserIcon
              colors={colors}
              size={size}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
