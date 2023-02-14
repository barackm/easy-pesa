import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../../theme';

const styles = StyleSheet.create({
  iconContainer: {
    marginHorizontal: metrics.moderateScale(5),
  },
  startIcon: {
    marginLeft: 0,
  },

  root: {
    display: 'flex',
    marginVertical: metrics.moderateScale(5),
  },
  input: {
    ...fonts.defaultTextStyle,
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    fontSize: metrics.moderateScale(12),
    paddingVertical: metrics.moderateScale(5),
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: metrics.moderateScale(12),
    borderWidth: metrics.moderateScale(0.5),
    borderColor: colors.grey[50],
    borderRadius: metrics.moderateScale(48),
    minHeight: metrics.moderateScale(46),
  },
  label: {
    ...fonts.medium,
    fontSize: metrics.moderateScale(12),
    letterSpacing: metrics.moderateScale(0.2),
    marginBottom: metrics.moderateScale(4),
    ...fonts.defaultTextStyle,
  },
});

export default styles;
