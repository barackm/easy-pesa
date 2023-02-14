import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../../theme';
import { shadow } from '../../../theme/utlis';

const ButtonRoot = {
  borderRadius: metrics.moderateScale(48),
  paddingHorizontal: metrics.moderateScale(8),
  display: 'flex',
  alignItems: 'center',
  height: metrics.moderateScale(46),
  justifyContent: 'center',
  flexDirection: 'row',
  color: colors.text,
  borderWidth: metrics.moderateScale(1.1),
  marginVertical: metrics.moderateScale(5),
  ...shadow,
};
const buttonStyles = StyleSheet.create<any>({
  root: ButtonRoot,
  outlined: {
    ...ButtonRoot,
    backgroundColor: 'transparent',
    borderWidth: metrics.moderateScale(1.5),
    borderColor: 'transparent',
  },
  contained: {
    ...ButtonRoot,
  },
  text: {
    ...ButtonRoot,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  label: {
    color: colors.text.main,
    fontSize: metrics.moderateScale(12),
    fontWeight: fonts.subHeading.fontWeight,
    marginHorizontal: metrics.moderateScale(5),
  },
  iconContainer: {},
});

export default buttonStyles;
