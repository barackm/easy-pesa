import React, { useEffect } from 'react';
import Animated, {
  interpolateColor,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useDerivedValue,
} from 'react-native-reanimated';

import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { ISwitch } from '../../../types/switch';
import { colors, metrics, palette } from '../../../theme';
import { shadow } from '../../../theme/utlis';

const Switch: React.FC<ISwitch> = props => {
  const { value, color = 'primary', disabled, onValueChange } = props;

  const switchTranslate = useSharedValue(0);
  const progress = useDerivedValue(() => {
    return withTiming(value ? 22 : 0);
  });

  useEffect(() => {
    if (value) {
      switchTranslate.value = metrics.moderateScale(18);
    } else {
      switchTranslate.value = metrics.moderateScale(2);
    }
  }, [switchTranslate, value]);

  const customSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(switchTranslate.value, {
            mass: 1,
            damping: 15,
            stiffness: 120,
            overshootClamping: false,
            restSpeedThreshold: 0.001,
            restDisplacementThreshold: 0.001,
          }),
        },
      ],
    };
  });

  const backgroundColorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 22],
      [
        colors.grey.main,
        (palette[color as keyof typeof palette]?.main as string) ||
          (colors.primary.main as string),
      ],
    );
    return {
      backgroundColor,
    };
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (!disabled) {
          onValueChange && onValueChange(!value);
        }
      }}>
      <Animated.View style={[styles.root, backgroundColorStyle]}>
        <Animated.View style={[styles.circle, customSpringStyles]} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Switch;

const styles = StyleSheet.create({
  root: {
    width: metrics.moderateScale(38),
    height: metrics.moderateScale(22),
    borderRadius: metrics.moderateScale(30),
    justifyContent: 'center',
    backgroundColor: colors.grey[100],
  },
  circle: {
    width: metrics.moderateScale(18),
    height: metrics.moderateScale(18),
    borderRadius: metrics.moderateScale(30),
    backgroundColor: colors.text.main as string,
    shadowColor: colors.text.main,
    ...shadow,
  },
});
