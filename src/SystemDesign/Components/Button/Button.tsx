import AnimatedButton from '@/Components/AnimatedButton/AnimatedButton';
import ApplyShadow from '@/Components/ApplyShadow/ApplyShadow';
import { useButtonStyles } from '@/hooks/styles/useButtonStyles';
import Text from '@/SystemDesign/Components/Text/Text';
import { useTheme } from '@/theme/ThemeContext';
import React from 'react';
import {
  TouchableWithoutFeedbackProps,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ActivityIndicator from '../ActivityIndicator/ActivityIndicator';

type ButtonChildren =
  | React.ReactNode
  | (({ size, color }: { size: number; color: string }) => React.ReactNode);
// @ts-ignore
interface ButtonProps extends TouchableWithoutFeedbackProps {
  startIcon?: ({
    size,
    color,
  }: {
    size: number;
    color: string;
  }) => React.ReactNode;
  endIcon?: ({
    size,
    color,
  }: {
    size: number;
    color: string;
  }) => React.ReactNode;
  variant?: 'default' | 'outlined' | 'text';
  color?: string;
  style?: any;
  loading?: boolean;
  disabled?: boolean;
  isIconBtn?: boolean;
  size?: 'small' | 'medium' | 'large';
  children?: ButtonChildren;
  autoWidth?: boolean;
  showShadow?: boolean;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = props => {
  const { colors } = useTheme();

  const {
    startIcon,
    endIcon,
    variant = 'default',
    color = colors.backgrounds.red,
    children,
    size = 'medium',
    autoWidth = false,
    isIconBtn,
    showShadow = true,
    loading,
    onPress,
    disabled,
  } = props;

  const { styles, getTextAndIconSize, getTextColor } = useButtonStyles({
    autoWidth,
    color,
    variant,
    colors,
    size,
    isIconBtn,
    disabled,
    loading,
  });
  return (
    <AnimatedButton
      onPress={() => {
        if (!loading && !disabled) {
          onPress && onPress();
        }
      }}
      disabled={disabled || loading}>
      <ApplyShadow showShadow={showShadow && !disabled} backgroundColor={color}>
        <TouchableWithoutFeedback {...props}>
          <View style={styles.container}>
            {!isIconBtn && loading && (
              <View style={styles.loadingIndicator}>
                <ActivityIndicator color={getTextColor()} size="small" />
              </View>
            )}
            {startIcon && (
              <View style={[styles.buttonInlineIcons, styles.startIcon]}>
                {startIcon({
                  size: getTextAndIconSize().iconSize,
                  color: getTextColor(),
                })}
              </View>
            )}
            {!isIconBtn ? (
              <Text
                numberOfLines={1}
                size={getTextAndIconSize().fontSize}
                style={styles.buttonText}
                weight={getTextAndIconSize().textWeight}>
                {children && typeof children !== 'function' ? children : ''}
              </Text>
            ) : (
              <View style={styles.buttonIcon}>
                {loading ? (
                  <View
                    style={[
                      styles.loadingIndicator,
                      styles.buttonIconLoadingIndicator,
                    ]}>
                    <ActivityIndicator color={getTextColor()} size="small" />
                  </View>
                ) : (
                  children &&
                  typeof children === 'function' &&
                  children({
                    size: getTextAndIconSize().iconSize,
                    color: getTextColor(),
                  })
                )}
              </View>
            )}
            {endIcon && (
              <View style={[styles.buttonInlineIcons, styles.endIcon]}>
                {endIcon({
                  size: getTextAndIconSize().iconSize,
                  color: getTextColor(),
                })}
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>
      </ApplyShadow>
    </AnimatedButton>
  );
};

export default Button;
