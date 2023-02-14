import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StyleSheet, View } from 'react-native';
import { metrics, TColors } from '../theme';
import { shadow } from '../theme/utlis';

interface BottomTabButtonProps {
  size: number;
  color: string;
  colors: TColors;
}

const BottomTabButton: React.FC<BottomTabButtonProps> = props => {
  const { size, colors } = props;
  return (
    <View
      style={{
        width: metrics.moderateScale(55),
        height: metrics.moderateScale(55),
        borderRadius: metrics.moderateScale(55 / 2),
        ...shadow,
        ...styles.container,
        backgroundColor: colors.primary[300],
      }}>
      <AntDesign name="plus" color={colors.white.main} size={size} />
    </View>
  );
};

export default BottomTabButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
