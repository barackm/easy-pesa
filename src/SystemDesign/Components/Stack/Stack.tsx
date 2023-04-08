import { Space, space } from '@/layout/space';
import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface StackProps {
  space?: Space;
  children: React.ReactNode;
  style?: ViewStyle;
}

const Stack: React.FC<StackProps> = ({
  space: _space = '1',
  children,
  style = {},
}) => {
  // @ts-ignore
  const spacing = space[_space as Space];
  const childArray = React.Children.toArray(children);

  const childrenWithSpacing = childArray.reduce<React.ReactNode[]>(
    (acc, child, index) => {
      if (index === 0) {
        return [child];
      }

      return [
        ...acc,
        <View
          key={`space-${index}`}
          style={{ height: spacing, width: spacing }}
        />,
        child,
      ];
    },
    [],
  );

  return <View style={[styles.container, style]}>{childrenWithSpacing}</View>;
};

const styles = StyleSheet.create({
  container: {},
});

export default Stack;
