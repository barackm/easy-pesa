import { metrics } from '@/styles';
import { Portal } from '@gorhom/portal';
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

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
  const opacity = useSharedValue(0);
  const [targetLayout, setTargetLayout] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const margin = metrics.moderateScale(15);
  useEffect(() => {
    if (open) {
      opacity.value = withSpring(1, {
        damping: 20,
      });
      if (target.current) {
        target.current.measureInWindow((x, y, width, height) => {
          setTargetLayout({ x, y, width, height });
        });
      }
    } else {
      opacity.value = withSpring(0, {
        damping: 20,
      });
    }
  }, [open, target, opacity]);

  const popoverWidth = metrics.moderateScale(250);
  const windowWidth = Dimensions.get('window').width;

  const popoverStyle = useAnimatedStyle(() => {
    let _popoverX = targetLayout.x - margin;
    if (_popoverX + popoverWidth > windowWidth - margin) {
      _popoverX = windowWidth - popoverWidth - margin;
    }
    if (_popoverX < margin) {
      _popoverX = margin;
    }
    return {
      // transform: [{ opacity: opacity.value }],
      opacity: opacity.value,
      position: 'absolute',
      left: _popoverX,
      top: targetLayout.y + targetLayout.height + 10,
      width: popoverWidth,
      height: 50,
      backgroundColor: 'orange',
      zIndex: 100,
    };
  });

  const styles = StyleSheet.create({
    overlay: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: windowWidth,
      height: Dimensions.get('window').height,
      zIndex: 99,
    },
    contentContainer: {},
    overlayTouchable: {
      flex: 1,
    },
  });

  return (
    <>
      {open && (
        <Portal>
          <Animated.View style={[styles.overlay]}>
            <TouchableOpacity
              onPress={onClose}
              style={styles.overlayTouchable}
            />
          </Animated.View>
          <Animated.View style={[popoverStyle]}>
            <View style={styles.contentContainer}>{children}</View>
          </Animated.View>
        </Portal>
      )}
    </>
  );
};

export default Popover;
