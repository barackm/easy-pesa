import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { metrics } from '../../theme';

interface Props {
  children: React.ReactNode;
  header?: string;
  style?: any;
}

const Screen: React.FC<Props> = ({ children, style }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={[styles.main, style]}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={isDarkMode ? 'black' : 'white'}
        />
        {children}
      </SafeAreaView>
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: metrics.horizontalScale(20),
    paddingVertical: metrics.moderateScale(20),
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  lightHeaderBar: {
    backgroundColor: 'white',
  },
  darkHeaderBar: {
    backgroundColor: 'black',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lightHeaderText: {
    color: 'black',
  },
  darkHeaderText: {
    color: 'white',
  },
});
