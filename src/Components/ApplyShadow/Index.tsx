import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import ConditionalWrap from 'conditional-wrap';
import DropShadow from 'react-native-drop-shadow';

type ApplyShadowProps = {
  backgroundColor: string;
  children: any;
  shadowOpacity?: number;
  shadowRadius?: number;
  showShadow?: boolean;
};

const ApplyShadow = ({
  backgroundColor,
  children,
  shadowOpacity = 0.5,
  shadowRadius = 5,
  showShadow = true,
}: ApplyShadowProps) => {
  const shadow: any = {
    shadowColor: backgroundColor,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity,
    shadowRadius,
  };
  return (
    <ConditionalWrap
      condition={showShadow || false}
      wrap={_children => (
        <>
          {Platform.OS === 'ios' ? (
            // @ts-ignore
            <DropShadow style={shadow}>
              <View style={styles.container}>{_children}</View>
            </DropShadow>
          ) : (
            <View style={[shadow]}>
              <View style={styles.container}>{_children}</View>
            </View>
          )}
        </>
      )}>
      {children}
    </ConditionalWrap>
  );
};

export default ApplyShadow;

const styles = StyleSheet.create({
  container: {},
});
