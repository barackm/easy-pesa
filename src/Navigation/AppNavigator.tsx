import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import HomeScreen from '@/Screens/Home/HomeScreen';
import AppTabBar from './AppTabBar';
import Text from '@/SystemDesign/Components/Text/Index';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
  Settings4: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export interface AppTabBarRoute {
  name: string;
  component: React.FC<any>;
  icon: (props: IconProps) => React.ReactElement;
  activeIcon: (props: IconProps) => React.ReactElement;
}

type IconProps = {
  color: string;
  size: number;
};

const AppNavigator: React.FC<Props> = ({ navigation }) => {
  const AppNavigators = [
    {
      name: 'Home',
      component: HomeScreen,
      icon: ({ color, size }: IconProps) => (
        <Ionicons size={size} color={color} name="md-home-outline" />
      ),
      activeIcon: ({ color, size }: IconProps) => (
        <Ionicons name="home" size={size} color={color} />
      ),
    },
    {
      name: 'Settings1',
      component: HomeScreen,
      icon: ({ color, size }: IconProps) => (
        <Ionicons size={size} color={color} name="md-home-outline" />
      ),
      activeIcon: ({ color, size }: IconProps) => (
        <Ionicons name="home" size={size} color={color} />
      ),
    },
    {
      name: 'Settings2',
      component: HomeScreen,
      icon: ({ color, size }: IconProps) => (
        <Ionicons size={size} color={color} name="md-home-outline" />
      ),
      activeIcon: ({ color, size }: IconProps) => (
        <Ionicons name="home" size={size} color={color} />
      ),
    },
    {
      name: 'Settings3',
      component: HomeScreen,
      icon: ({ color, size }: IconProps) => (
        <Ionicons size={size} color={color} name="md-home-outline" />
      ),
      activeIcon: ({ color, size }: IconProps) => (
        <Ionicons name="home" size={size} color={color} />
      ),
    },
    {
      name: 'Settings4',
      component: HomeScreen,
      icon: ({ color, size }: IconProps) => (
        <Ionicons size={size} color={color} name="md-home-outline" />
      ),
      activeIcon: ({ color, size }: IconProps) => (
        <Ionicons name="home" size={size} color={color} />
      ),
    },
  ];

  const handleTabPress = (routeName: any) => {
    // navigation.navigate(routeName);
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
