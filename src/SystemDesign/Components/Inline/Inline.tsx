import { Space, space } from '@/layout/space';
import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

type AlignHorizontal = 'left' | 'right' | 'center';
type AlignVertical = 'top' | 'bottom' | 'center';

type InlineProps = {
  alignHorizontal?: AlignHorizontal;
  alignVertical?: AlignVertical;
  space?: Space | keyof typeof space;
  style?: ViewStyle;
  children: ReactNode;
};

const Inline: React.FC<InlineProps> = ({
  alignHorizontal = 'left',
  alignVertical = 'center',
  space: _space = '1',
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

  const spacing = typeof _space === 'string' ? space[_space] : _space;
  const spaceStyle = { marginHorizontal: Number(spacing) / 2 };
  const childArray = React.Children.toArray(children);

  const childrenWithSpacing = childArray.reduce<ReactNode[]>(
    (acc, child, index) => {
      if (index === 0) {
        return [child];
      }

      return [
        ...acc,
        <View key={`space-${index}`} style={[spaceStyle]} />,
        child,
      ];
    },
    [],
  );

  return (
    <View
      style={[
        styles.inlineContainer,
        { justifyContent, flexDirection, alignItems },
        style,
      ]}>
      {childrenWithSpacing}
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
