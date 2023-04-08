import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '@/theme/ThemeContext';
import { metrics } from '@/styles';
import AnimatedButton from '@/SystemDesign/Components/AnimatedButton/AnimatedButton';
import ApplyShadow from '../ApplyShadow/ApplyShadow';

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
      backgroundColor: colors.backgrounds.card,
      borderRadius: metrics.moderateScale(14),
      padding: isNotAList ? metrics.moderateScale(15) : 0,
      marginVertical: metrics.moderateScale(10),
      overflow: 'hidden',
    },
  });

  return (
    <AnimatedButton disabled={!onPress} onPress={() => onPress && onPress()}>
      <View style={styles.mainContainer}>
        <ApplyShadow
          backgroundColor={colors.dark}
          shadowOpacity={0.05}
          shadowRadius={10}>
          <View style={styles.container}>{children}</View>
        </ApplyShadow>
      </View>
    </AnimatedButton>
  );
};

export default Card;
