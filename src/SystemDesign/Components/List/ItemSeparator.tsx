import { useTheme } from '@/theme/ThemeContext';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface ItemSeparatorProps {}

const ItemSeparator: React.FC<ItemSeparatorProps> = props => {
  const {} = props;
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    separator: {
      height: 1,
      backgroundColor: colors.lighterGrey,
      width: '100%',
    },
  });

  return <View style={styles.separator} />;
};

export default ItemSeparator;
