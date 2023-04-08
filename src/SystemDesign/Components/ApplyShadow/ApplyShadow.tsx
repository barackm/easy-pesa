import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

type DropShadowProps = {
  backgroundColor: string;
  children: React.ReactNode;
  shadowOpacity?: number;
  shadowRadius?: number;
  showShadow?: boolean;
};

const DropShadow = ({
  backgroundColor,
  children,
  shadowOpacity = 0.3,
  shadowRadius = 3,
  showShadow = true,
}: DropShadowProps) => {
  const shadowStyle = Platform.select({
    ios: {
      shadowColor: backgroundColor,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity,
      shadowRadius,
      width: '100%',
    },
    android: {
      elevation: showShadow ? shadowRadius : 0,
      backgroundColor,
      width: '100%',
    },
  });

  return <View style={[styles.shadowContainer, shadowStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  shadowContainer: {
    backgroundColor: 'transparent',
  },
});

export default DropShadow;
