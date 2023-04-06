import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import HomeScreen from '@/Screens/Home/HomeScreen';
import AppTabBar from './AppTabBar';
import HomeIcon from '@/Components/Icons/HomeIcon';
import UserIcon from '@/Components/Icons/UserIcon';
import ProfileScreen from '@/Screens/Profile/ProfileScreen';
import TrophyIcon from '@/Components/Icons/Trophycon';
import ChartIcon from '@/Components/Icons/ChartIcon';

type RootStackParamList = {
  Home: undefined;
  Reports: undefined;
  Goals: undefined;
  Profile: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export interface AppTabBarRoute {
  name: string;
  component: React.FC<any>;
  icon: (props: IconProps) => React.ReactElement;
}

type IconProps = {
  color: string;
  size: number;
  isFocused?: boolean;
};

const AppNavigators = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: ({ color, size, isFocused }: IconProps) => (
      <HomeIcon color={color} size={size} isFocused={isFocused} />
    ),
  },
  {
    name: 'Reports',
    component: HomeScreen,
    icon: ({ color, size, isFocused }: IconProps) => (
      <ChartIcon size={size} color={color} isFocused={isFocused} />
    ),
  },
  {
    name: 'Goals',
    component: HomeScreen,
    icon: ({ color, size, isFocused }: IconProps) => (
      <TrophyIcon size={size} color={color} isFocused={isFocused} />
    ),
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    icon: ({ color, size, isFocused }: IconProps) => (
      <UserIcon color={color} size={size} isFocused={isFocused} />
    ),
  },
];

const renderTabBar = (props: any) => (
  <AppTabBar
    options={AppNavigators}
    state={props.state}
    descriptors={props.descriptors}
    navigation={props.navigation}
  />
);

const AppNavigator: React.FC<Props> = () => {
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      {AppNavigators.map((item: any, index) => (
        <Tab.Screen key={index} name={item.name} component={item.component} />
      ))}
    </Tab.Navigator>
  );
};

export default AppNavigator;
