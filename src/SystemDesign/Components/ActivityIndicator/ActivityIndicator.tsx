import React from 'react';
import {
  MaterialIndicator,
  SkypeIndicatorProps,
} from 'react-native-indicators';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';
import { metrics } from '@/styles';

interface ActivityIndicatorProps extends Omit<SkypeIndicatorProps, 'size'> {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  style?: StyleProp<ViewStyle>;
}
const ActivityIndicator: React.FC<ActivityIndicatorProps> = props => {
  const { color, style, animationDuration = 5000, size, ...rest } = props;
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {},
  });

  const getSize = () => {
    switch (size) {
      case 'medium':
        return metrics.moderateScale(24);
      case 'large':
        return metrics.moderateScale(30);
      case 'small':
      default:
        return metrics.moderateScale(18);
    }
  };
  return (
    <MaterialIndicator
      color={color || colors.red}
      size={getSize()}
      animationDuration={animationDuration}
      style={[styles.container, style]}
      {...rest}
    />
  );
};

export default ActivityIndicator;
