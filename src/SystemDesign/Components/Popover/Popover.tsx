import React from 'react';
import { View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Portal } from '../Portal/Portal';

interface PopoverProps {
  open: boolean;
  onClose: () => void;
  target: React.RefObject<TouchableOpacity>;
  children: React.ReactNode;
}

const Popover: React.FC<PopoverProps> = ({
  open,
  onClose,
  target,
  children,
}) => {
  const translateY = useSharedValue(0);
  const [targetLayout, setTargetLayout] = React.useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    if (open) {
      translateY.value = withTiming(-50, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });

      if (target.current) {
        target.current.measure((x, y, width, height) => {
          setTargetLayout({ x, y, width, height });
        });
      }
    } else {
      translateY.value = withTiming(0, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const popoverWidth = 250;
  const windowWidth = Dimensions.get('window').width;
  let popoverX = targetLayout.x + targetLayout.width / 2 - popoverWidth / 2;

  if (popoverX < 0) {
    popoverX = 0;
  } else if (popoverX + popoverWidth > windowWidth) {
    popoverX = windowWidth - popoverWidth;
  }

  const overlayOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(open ? 1 : 0, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      }),
    };
  });

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      left: popoverX,
      top: targetLayout.y + targetLayout.height,
      width: popoverWidth,
      height: 50,
      backgroundColor: 'orange',
      transform: [{ translateY: translateY.value }],
      zIndex: 100,
    },

    overlay: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: windowWidth,
      height: Dimensions.get('window').height,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 99,
    },
    mainContainer: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    contentContainer: {},
    overlayTouchable: {
      flex: 1,
    },
  });

  return (
    <Portal>
      <Animated.View style={[styles.overlay, overlayOpacityStyle]}>
        <TouchableOpacity onPress={onClose} style={styles.overlayTouchable} />
      </Animated.View>
      <Animated.View style={styles.container}>
        <View style={styles.contentContainer}>{children}</View>
      </Animated.View>
    </Portal>
  );
};

export default Popover;
