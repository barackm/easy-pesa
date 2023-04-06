import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import HomeScreen from '@/Screens/Home/HomeScreen';
import AppTabBar from './AppTabBar';
import Text from '@/SystemDesign/Components/Text/Index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeIcon from '@/Components/Icons/HomeIcon';
import UserIcon from '@/Components/Icons/UserIcon';
import ProfileScreen from '@/Screens/Profile/ProfileScreen';
import TrophyIcon from '@/Components/Icons/Trophycon';
import ChartIcon from '@/Components/Icons/ChartIcon';

type RootStackParamList = {
  Home: undefined;
  Settings1: undefined;
  Settings2: undefined;
  Settings3: undefined;
  Settings4: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

type TabNavigatorParamList = {
  Home: undefined;
  Settings1: undefined;
  Settings2: undefined;
  Settings3: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

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

const AppNavigator: React.FC<Props> = ({ navigation }) => {
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

  const handleTabPress = (routeName: any) => {
    navigation.navigate(routeName);
  };

  return (
    <Tab.Navigator
      tabBar={(props: any) => (
        <AppTabBar
          {...props}
          options={AppNavigators}
          navigation={navigation}
          onTabPress={handleTabPress}
        />
      )}
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
