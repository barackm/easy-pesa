import { useTheme } from '@/theme/ThemeContext';
import React, { useMemo } from 'react';
import { View } from 'react-native';

export interface SeparatorProps {
  color: string;
  direction?: 'horizontal' | 'vertical';
}

const Separator: React.FC<SeparatorProps> = props => {
  const { direction = 'horizontal' } = props;
  const { colors } = useTheme();

  const style = useMemo(
    () => ({
      backgroundColor: colors.lighterGrey,
      width: direction === 'horizontal' ? '100%' : 1,
    }),
    [direction, colors],
  );

  return <View style={style} />;
};

export default Separator;
