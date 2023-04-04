import { StyleSheet, View } from 'react-native';
import React from 'react';
import ApplyShadow from '@/Components/ApplyShadow/Index';
import { useTheme } from '@/theme/ThemeContext';
import { metrics } from '@/styles';
import AnimatedButton from '@/Components/AnimatedButton/AnimatedButton';

interface CardProps {
  onPress?: () => void;
  children?: React.ReactNode;
  isNotAList?: boolean;
}

const Card: React.FC<CardProps> = props => {
  const { onPress, children, isNotAList = true } = props;
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    mainContainer: {
      width: '100%',
    },
    container: {
      width: '100%',
      backgroundColor: colors.white,
      borderRadius: metrics.moderateScale(14),
      padding: isNotAList ? metrics.moderateScale(15) : 0,
      marginVertical: metrics.moderateScale(10),
      overflow: 'hidden',
    },
  });

  return (
    <AnimatedButton disabled={!onPress} onPress={() => onPress && onPress()}>
      <View style={styles.mainContainer}>
        <ApplyShadow backgroundColor={colors.white}>
          <View style={styles.container}>{children}</View>
        </ApplyShadow>
      </View>
    </AnimatedButton>
  );
};

export default Card;
