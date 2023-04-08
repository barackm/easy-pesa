import { Space, space } from '@/layout/space';
import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface StackProps {
  space?: Space | keyof typeof space;
  children: React.ReactNode;
  style?: ViewStyle;
}

const Stack: React.FC<StackProps> = ({
  space: _space = '1',
  children,
  style = {},
}) => {
  const spacing = typeof _space === 'string' ? space[Number(_space)] : _space;
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
