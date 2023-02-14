import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { fonts, metrics, themedColors } from '../../theme';

interface SocialLoginProps {
  helperText?: string;
}
const SocialLogin: React.FC<SocialLoginProps> = props => {
  const { helperText } = props;
  return (
    <View style={styles.socialLoginContainer}>
      <View style={styles.separatorContainer}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>OR</Text>
        <View style={styles.separatorLine} />
      </View>
      <Text style={styles.separatorTextHelper}>
        {helperText || 'Sign in with your social media account'}
      </Text>
      <View style={styles.socialLoginsContainer}>
        <TouchableOpacity style={styles.socialLoginButton}>
          <Image
            source={require('../../assets/images/icons/google.png')}
            style={styles.socialLoginButtonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginButton}>
          <Image
            source={require('../../assets/images/icons/facebook.png')}
            style={styles.socialLoginButtonIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SocialLogin;
const styles = StyleSheet.create({
  socialLoginContainer: {
    width: '100%',
    marginVertical: metrics.moderateScale(20),
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: themedColors.light.grey[600],
  },
  separatorText: {
    marginHorizontal: 10,
    ...fonts.bold,
  },
  separatorTextHelper: {
    ...fonts.body,
    color: themedColors.light.text[300],
    marginVertical: metrics.moderateScale(10),
    textAlign: 'center',
    fontWeight: '500',
  },
  socialLoginsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  socialLoginButton: {
    width: metrics.moderateScale(50),
    height: metrics.moderateScale(50),
    borderRadius: metrics.moderateScale(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: metrics.moderateScale(5),
  },

  socialLoginButtonIcon: {
    width: metrics.moderateScale(40),
    height: metrics.moderateScale(40),
  },
});
