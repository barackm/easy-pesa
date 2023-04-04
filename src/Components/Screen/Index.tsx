import { metrics } from '@/styles';
// import { useTheme } from '@/theme/ThemeContext';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

interface ScreenProps {
  children: React.ReactNode;
}

const Screen: React.FC<ScreenProps> = props => {
  const { children } = props;
  // const { setTheme } = useTheme();

  return (
    <View style={styles.container}>
      <SafeAreaView />
      {children}
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.moderateScale(15),
  },
});
