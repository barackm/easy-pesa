import { metrics } from '@/styles';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';

interface SwitchProps {
  onValueChange?: (value: boolean) => void;
  value?: boolean;
}
const Switch: React.FC<SwitchProps> = ({ onValueChange, value }) => {
  const [active, setActive] = useState(value);
  const switchTranslateX = useSharedValue(0);

  const toggleSwitch = () => {
    onValueChange && onValueChange(!active);
  };

  const switchStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      switchTranslateX.value,
      [0, 20],
      ['#ddd', '#2ecc71'],
    );

    return {
      backgroundColor,
    };
  });

  const handleStyle = useAnimatedStyle(() => {
    const translateX = switchTranslateX.value;
    return {
      transform: [{ translateX }],
    };
  });

  const updateSwitch = useCallback(() => {
    switchTranslateX.value = withTiming(active ? 0 : 13, {
      duration: 200,
    });
    setActive(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, switchTranslateX]);

  useEffect(() => {
    updateSwitch();
  }, [updateSwitch]);

  return (
    <TouchableWithoutFeedback onPress={toggleSwitch}>
      <Animated.View style={[styles.switch, switchStyle]}>
        <Animated.View style={[styles.handle, handleStyle]} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  switch: {
    width: metrics.moderateScale(34),
    height: metrics.moderateScale(20),
    borderRadius: metrics.moderateScale(20),
    backgroundColor: '#ddd',
    position: 'relative',
  },
  handle: {
    width: metrics.moderateScale(17),
    height: metrics.moderateScale(17),
    borderRadius: metrics.moderateScale(17),
    backgroundColor: 'white',
    position: 'absolute',
    top: 1,
    left: 2,
  },
});

export default Switch;
