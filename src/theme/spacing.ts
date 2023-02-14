import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const spacing = StyleSheet.create({
  xxsmall: {
    margin: width * 0.025,
    padding: width * 0.025,
  },
  xsmall: {
    margin: width * 0.05,
    padding: width * 0.05,
  },
  small: {
    margin: width * 0.075,
    padding: width * 0.075,
  },
  medium: {
    margin: width * 0.1,
    padding: width * 0.1,
  },
  large: {
    margin: width * 0.15,
    padding: width * 0.15,
  },
  xlarge: {
    margin: width * 0.2,
    padding: width * 0.2,
  },
  xxlarge: {
    margin: width * 0.3,
    padding: width * 0.3,
  },
  xxxlarge: {
    margin: width * 0.4,
    padding: width * 0.4,
  },
});
