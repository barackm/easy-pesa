import { useTheme } from '@/theme/ThemeContext';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { AppTabBarRoute } from './AppNavigator';
import Text from '@/SystemDesign/Components/Text/Index';
import { colors, metrics } from '@/styles';
import AnimatedButton from '@/Components/AnimatedButton/AnimatedButton';

interface TabBarItemProps {
  onPress: () => void;
  isFocused: boolean;
  route: AppTabBarRoute;
  label: string;
}

const TabBarItem: React.FC<TabBarItemProps> = props => {
  const { onPress, isFocused, route, label } = props;
  const { icon } = route;
  const { colors } = useTheme();

  return (
    <View style={styles.tabBarItemContainer}>
      <TouchableWithoutFeedback onPress={onPress} style={styles.container}>
        <View>
          <AnimatedButton>
            <View style={styles.iconContainer}>
              {icon({
                color: colors.dark,
                size: metrics.moderateScale(20),
                isFocused,
              })}
            </View>
          </AnimatedButton>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TabBarItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarItemContainer: {
    flex: 1,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    color: colors.appleBlue,
  },
});
