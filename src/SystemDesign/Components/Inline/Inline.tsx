import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

type AlignHorizontal = 'left' | 'right' | 'center';
type AlignVertical = 'top' | 'bottom' | 'center';

type InlineProps = {
  alignHorizontal?: AlignHorizontal;
  alignVertical?: AlignVertical;
  space?: number;
  style?: ViewStyle;
  children: ReactNode;
};

const Inline: React.FC<InlineProps> = ({
  alignHorizontal = 'left',
  alignVertical = 'center',
  space = 0,
  style,
  children,
}) => {
  const justifyContent =
    alignHorizontal === 'left'
      ? 'flex-start'
      : alignHorizontal === 'right'
      ? 'flex-end'
      : 'center';
  const flexDirection = 'row';
  const alignItems =
    alignVertical === 'top'
      ? 'flex-start'
      : alignVertical === 'bottom'
      ? 'flex-end'
      : 'center';

  const spaceStyle = space ? { marginHorizontal: space / 2 } : {};

  return (
    <View
      style={[
        styles.inlineContainer,
        { justifyContent, flexDirection, alignItems },
        spaceStyle,
        style,
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  inlineContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});

export default Inline;
