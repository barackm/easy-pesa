import { Dimensions, StyleSheet } from 'react-native';
import { moderateScale, verticalScale, scale } from 'react-native-size-matters';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const horizontalScale = (size: number) => {
  const standardWidth = 360; // standard width
  const ratio = size / standardWidth; // get ratio based on standard width
  return scale(screenWidth * ratio); // scale size based on current screen width
};

export const metrics = {
  screenWidth,
  screenHeight,
  navBarHeight: verticalScale(64),
  tabBarHeight: verticalScale(48),
  baseMargin: scale(16),
  doubleBaseMargin: scale(32),
  smallMargin: scale(8),
  doubleSection: verticalScale(128),
  horizontalLineHeight: StyleSheet.hairlineWidth,
  verticalScale,
  moderateScale,
  scale,
  horizontalScale,
};
