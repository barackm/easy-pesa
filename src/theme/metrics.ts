import { Dimensions, StyleSheet } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const scale = screenWidth / 360;

export const metrics = {
  screenWidth,
  screenHeight,
  navBarHeight: 64,
  tabBarHeight: 48,
  baseMargin: 16,
  doubleBaseMargin: 32,
  smallMargin: 8,
  doubleSection: 128,
  horizontalLineHeight: StyleSheet.hairlineWidth,
  scale,
  verticalScale: (size: number) => size * scale,
  horizontalScale: (size: number) => size * scale,
  moderateScale: (size: number, factor = 0.8) =>
    screenWidth / screenHeight > 1.6 ? size * factor : size,
};
