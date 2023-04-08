import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface StackProps {
  space?: number;
  children: React.ReactNode;
  style?: ViewStyle;
}

const Stack: React.FC<StackProps> = ({ space = 0, children, style = {} }) => {
  const marginVertical = space / -2;

  const containerStyle = {
    marginVertical,
  };

  return (
    <View style={[styles.container, containerStyle, style]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Stack;
