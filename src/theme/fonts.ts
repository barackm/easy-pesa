import { Platform, StyleSheet } from 'react-native';
import { colors } from './colors';
import { metrics } from './metrics';

export const fonts = StyleSheet.create({
  heading: {
    fontSize: metrics.moderateScale(24),
    fontWeight: 'bold',
    fontFamily: Platform.select({
      ios: 'Helvetica Neue',
      android: 'Roboto',
    }),
    color: colors.text.main,
  },
  subHeading: {
    fontSize: metrics.moderateScale(18),
    fontWeight: '600',
    fontFamily: Platform.select({
      ios: 'Helvetica Neue',
      android: 'Roboto',
    }),
    color: colors.text.main,
  },
  body: {
    fontSize: metrics.moderateScale(14),
    fontWeight: '400',
    fontFamily: Platform.select({
      ios: 'Helvetica Neue',
      android: 'Roboto',
    }),
    color: colors.text.main,
  },
  caption: {
    fontSize: metrics.moderateScale(12),
    fontWeight: '400',
    fontFamily: Platform.select({
      ios: 'Helvetica Neue',
      android: 'Roboto',
    }),
    color: colors.text.main,
  },
  defaultTextStyle: {
    fontFamily: Platform.select({
      ios: 'Helvetica Neue',
      android: 'Roboto',
    }),
  },

  bold: {
    fontWeight: 'bold',
  },
  medium: {
    fontWeight: '600',
  },
  regular: {
    fontWeight: '400',
  },
  light: {
    fontWeight: '300',
  },
  lighter: {
    fontWeight: '200',
  },
  lightest: {
    fontWeight: '100',
  },
});
