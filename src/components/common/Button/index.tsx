import React from 'react';
import { Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { useButtonVariantBasedStyles } from '../../../hooks/useButtonVariantBasedStyles';
import { colors, metrics } from '../../../theme';
import { IButton } from '../../../types/button';

import styles from './styles';

const Button: React.FC<IButton> = props => {
  const {
    children,
    onPress,
    startIcon,
    label,
    endIcon,
    loading,
    variant = 'contained',
    color = 'primary',
    disabled = false,
    autoWidth = false,
    renderIconBtn,
    styles: stylesProp = {},
  } = props;

  const { buttonStyles, textStyles, iconStyles } = useButtonVariantBasedStyles({
    variant,
    color: disabled ? 'disabled' : color,
    disabled,
    loading: loading || false,
  });

  return (
    <TouchableOpacity
      onPress={() => {
        if (!disabled || loading) {
          onPress();
        }
      }}
      disabled={disabled || loading}
      activeOpacity={0.8}
      style={{
        ...styles.root,
        ...buttonStyles,
        ...styles[variant],
        ...(autoWidth && {
          alignSelf: 'flex-start',
        }),
        ...((renderIconBtn || (renderIconBtn && loading)) && {
          width: metrics.moderateScale(46),
        }),
        ...stylesProp,
      }}>
      {(startIcon || loading) && !renderIconBtn && (
        <View style={styles.iconContainer}>
          {loading ? (
            <ActivityIndicator
              size={iconStyles.size}
              color={iconStyles.color as string}
            />
          ) : typeof startIcon === 'function' ? (
            startIcon({
              color: (iconStyles.color || colors.white.main) as string,
              size: iconStyles.size,
            })
          ) : (
            startIcon
          )}
        </View>
      )}
      {loading ? (
        <View style={styles.iconContainer}>
          <ActivityIndicator
            size={iconStyles.size}
            color={iconStyles.color as string}
          />
        </View>
      ) : (
        <Text
          style={{
            ...textStyles,
          }}
          numberOfLines={1}>
          {renderIconBtn
            ? renderIconBtn({
                color: (iconStyles.color || colors.white) as string,
                size: iconStyles.size,
              })
            : label || children}
        </Text>
      )}
      {endIcon && !renderIconBtn && (
        <View>
          {typeof endIcon === 'function'
            ? endIcon({
                color: (iconStyles.color || colors.white) as string,
                size: iconStyles.size,
              })
            : endIcon}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
