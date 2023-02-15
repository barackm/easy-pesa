import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { StatusBar } from 'react-native';

import { colors, fonts, metrics } from '../../theme';
import LoginContainer from './SignIn';
import SignUpContainer from './SignUp';
import useDeviceStatusBar from '../../hooks/useDeviceStatusBar';

interface AuthContainerProps {
  navigation: any;
}

const AuthContainer: React.FC<AuthContainerProps> = () => {
  const [target, setTarget] = React.useState<'signin' | 'signup'>('signin');

  const { statusBarHeight } = useDeviceStatusBar();

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
          bounces={false}>
          <StatusBar />
          <View
            style={[
              styles.safeAreaView,
              {
                paddingTop: statusBarHeight,
              },
            ]}>
            <View style={styles.authContentContainer}>
              <View style={styles.headerContentWrapper}>
                <View style={styles.welcomeTextWrapper}>
                  <Text style={styles.helloText}>Hello, There</Text>
                  <Text style={styles.welcomeText}>Welcome back</Text>
                </View>
                <View style={styles.buttonOptionsWrapper}>
                  <TouchableOpacity
                    style={[
                      styles.buttonOption,
                      target === 'signin' && styles.buttonOptionActive,
                    ]}
                    onPress={() => setTarget('signin')}>
                    <Text
                      style={[
                        styles.buttonText,
                        target === 'signin' && styles.buttonTextActive,
                      ]}>
                      Sign In
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.buttonOption,
                      target === 'signup' && styles.buttonOptionActive,
                    ]}
                    onPress={() => setTarget('signup')}>
                    <Text
                      style={[
                        styles.buttonText,
                        target === 'signup' && styles.buttonTextActive,
                      ]}>
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.childrenWrapper}>
                <View style={styles.authContent}>
                  {target === 'signin' ? (
                    <LoginContainer />
                  ) : (
                    <SignUpContainer />
                  )}
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AuthContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary.main,
  },
  scrollView: {
    height: '100%',
  },

  keyboardAvoidingView: {
    flex: 1,
    height: '100%',
  },
  safeAreaView: {
    flex: 1,
    height: metrics.screenHeight,
    justifyContent: 'center',
  },
  authContentContainer: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
  },

  headerContentWrapper: {
    marginHorizontal: metrics.horizontalScale(20),
    backgroundColor: colors.primary[400],
    padding: metrics.verticalScale(20),
    borderRadius: metrics.moderateScale(20),
    alignItems: 'center',
    height: '20%',
  },
  helloText: {
    ...fonts.body,
    color: colors.white.main,
    opacity: 0.4,
  },
  welcomeTextWrapper: {
    height: '50%',
  },

  welcomeText: {
    ...fonts.subHeading,
    color: colors.white.main,
    marginVertical: metrics.moderateScale(8),
  },
  buttonOptionsWrapper: {
    flexDirection: 'row',
    borderRadius: metrics.moderateScale(23),
    overflow: 'hidden',
    marginTop: metrics.moderateScale(16),
    backgroundColor: colors.primary[300],
    height: '40%',
  },
  buttonOption: {
    flex: 1,
    borderRadius: metrics.moderateScale(23),
    paddingHorizontal: metrics.moderateScale(8),
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonOptionActive: {
    backgroundColor: colors.white.main,
    borderRadius: metrics.moderateScale(23),
  },
  buttonText: {
    ...fonts.body,
    color: colors.primary[100],
  },
  buttonTextActive: {
    color: colors.text.main,
  },

  childrenWrapper: {
    marginTop: metrics.moderateScale(24),
    width: '100%',
    height: '80%',
  },

  authContent: {
    paddingHorizontal: metrics.horizontalScale(20),
    paddingVertical: metrics.moderateScale(20),
    borderTopLeftRadius: metrics.moderateScale(20),
    borderTopRightRadius: metrics.moderateScale(20),
    backgroundColor: colors.white.main,
    flex: 1,
  },
});
