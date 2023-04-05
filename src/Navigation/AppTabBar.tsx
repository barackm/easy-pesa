import { colors, metrics } from '@/styles';
import { useTheme } from '@/theme/ThemeContext';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import TabBarItem from './TabBarItem';
import ApplyShadow from '@/Components/ApplyShadow/Index';

type RootStackParamList = {
  Home: undefined;
  Settings1: undefined;
  Settings2: undefined;
  Settings3: undefined;
  Settings4: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface AppTabBarProps {
  state: any;
  descriptors: any;
  navigation: ProfileScreenNavigationProp;
  onTabPress: (routeName: string) => void;
  options: any[];
}

const AppTabBar: React.FC<AppTabBarProps> = props => {
  const {
    state,
    descriptors,
    navigation,
    onTabPress,
    options: routesList,
  } = props;
  const { colors } = useTheme();

  return (
    <ApplyShadow
      backgroundColor={colors.dark}
      shadowOpacity={0.1}
      shadowRadius={5}>
      <View style={styles.container}>
        <View style={styles.linksWrapper}>
          {state.routes.map((route: any, index: number) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              if (!isFocused) {
                onTabPress(route.name);
              }
            };

            const currentRoute = routesList.find(
              (routeItem: any) => routeItem.name === route.name,
            );

            return (
              <TabBarItem
                isFocused={isFocused}
                route={currentRoute}
                label={label}
                onPress={onPress}
                key={index}
              />
            );
          })}
        </View>
      </View>
    </ApplyShadow>
  );
};

export default AppTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderTopLeftRadius: metrics.moderateScale(20),
    borderTopRightRadius: metrics.moderateScale(20),
    height: metrics.moderateScale(80),
    paddingHorizontal: metrics.moderateScale(10),
    paddingTop: metrics.moderateScale(10),
  },

  linksWrapper: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgrounds.fillSecondary,
    borderRadius: metrics.moderateScale(35),
    height: metrics.moderateScale(35),
  },
});
