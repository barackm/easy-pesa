import { StyleSheet } from 'react-native';
import { fonts, metrics, themedColors } from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {},
  headerTextHeading: {
    ...fonts.bold,
  },
  headerTextSubHeading: {
    ...fonts.caption,
    color: themedColors.light.text[200],
    marginTop: metrics.moderateScale(4),
  },
  form: {
    marginTop: metrics.moderateScale(24),
    flex: 1,
    justifyContent: 'space-between',
  },
  formButtonsContainer: {
    marginBottom: metrics.moderateScale(24),
  },
  forgotPasswordContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginVertical: metrics.moderateScale(8),
  },
  forgotPasswordButton: {
    paddingVertical: metrics.moderateScale(4),
  },
  forgotPasswordText: {
    ...fonts.caption,
    color: themedColors.light.primary.main,
  },
});

export default styles;
