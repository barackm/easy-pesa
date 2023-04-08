import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

interface Props {
  onPress?: () => void;
  onLongPress?: () => void;
  style?: ViewStyle;
  children: React.ReactNode;
  disabled?: boolean;
}

const AnimatedButton: React.FC<Props> = ({
  onPress,
  onLongPress,
  style,
  children,
  disabled = false,
}) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    if (disabled) {
      return;
    }
    scale.value = withSpring(0.96, { stiffness: 500, damping: 20 });
  };

  const handlePressOut = () => {
    if (disabled) {
      return;
    }
    scale.value = withSpring(1, { stiffness: 500, damping: 20 });
  };

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <Animated.View style={[styles.container, animatedStyle, style]}>
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AnimatedButton;
