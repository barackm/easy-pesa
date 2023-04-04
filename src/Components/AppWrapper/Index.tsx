import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = props => {
  const { children } = props;
  const { colors } = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.backgrounds.fill,
        },
      ]}>
      {children}
    </View>
  );
};

export default AppWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
