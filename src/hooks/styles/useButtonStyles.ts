import { metrics } from '@/styles';
import { Colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

interface ButtonStylesProps {
  colors: Colors;
  variant: 'default' | 'outlined' | 'text';
  isIconBtn: boolean | undefined;
  autoWidth: boolean;
  size: string;
  color: string;
  disabled?: boolean | undefined;
  loading?: boolean | undefined;
}
export const useButtonStyles = (props: ButtonStylesProps) => {
  const {
    colors,
    variant,
    isIconBtn,
    autoWidth,
    size: s,
    color,
    disabled,
  } = props;

  const SMALL_SIZES = {
    height: metrics.moderateVerticalScale(32),
    borderRadius: metrics.moderateVerticalScale(30),
  };
  const MEDIUM_SIZES = {
    height: metrics.moderateVerticalScale(40),
    borderRadius: metrics.moderateVerticalScale(40),
  };
  const LARGE_SIZES = {
    height: metrics.moderateVerticalScale(50),
    borderRadius: metrics.moderateVerticalScale(25),
  };

  const getWidthBasedOnSize = (size: string) => {
    switch (size) {
      case 'small':
        return SMALL_SIZES;
      case 'large':
        return LARGE_SIZES;
      case 'medium':
      default:
        return MEDIUM_SIZES;
    }
  };

  const getBackgroundColor = () => {
    const cases = {
      default: () => {
        return color;
      },
      outlined: () => {
        return 'transparent';
      },
      text: () => {
        return colors.alpha(color, 0.12);
      },
    };
    return cases[variant]() || cases.default();
  };

  const getTextColor = () => {
    const cases = {
      default: () => {
        return colors.getFallbackTextColor(getBackgroundColor());
      },
      outlined: () => {
        return color;
      },
      text: () => {
        return color;
      },
    };
    return cases[variant]() || cases.default();
  };

  const getWidth = () => {
    if (isIconBtn) {
      return getWidthBasedOnSize(s).height;
    }
    if (autoWidth) {
      return 'auto';
    }
    return '100%';
  };

  const getTextAndIconSize = () => {
    const cases: any = {
      small: () => {
        return {
          fontSize: metrics.moderateVerticalScale(12),
          iconSize: metrics.moderateVerticalScale(15),
          loadingIndicatorSize: 18,
        };
      },
      medium: () => {
        return {
          fontSize: metrics.moderateVerticalScale(14),
          iconSize: metrics.moderateVerticalScale(18),
          loadingIndicatorSize: 22,
        };
      },
      large: () => {
        return {
          fontSize: metrics.moderateVerticalScale(18),
          iconSize: metrics.moderateVerticalScale(22),
          loadingIndicatorSize: 26,
        };
      },
    };
    return cases[s]() || cases.medium();
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: getBackgroundColor(),
      borderRadius: getWidthBasedOnSize(s).borderRadius,
      height: getWidthBasedOnSize(s).height,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: variant === 'outlined' ? 1 : 0,
      borderColor: color,
      flexDirection: 'row',
      paddingHorizontal:
        s === 'small' ? metrics.moderateScale(5) : metrics.moderateScale(10),
      width: getWidth(),
      ...(autoWidth
        ? {
            alignSelf: 'flex-start',
            paddingHorizontal: metrics.moderateScale(15),
          }
        : {}),
      marginVertical: metrics.moderateVerticalScale(5),
      opacity: disabled ? 0.5 : 1,
    },

    buttonText: {
      color: getTextColor(),
    },
    buttonIcon: {
      alignItems: 'center',
      justifyContent: 'center',
    },

    buttonInlineIcons: {},
    endIcon: {
      marginLeft: metrics.moderateScale(5),
    },
    startIcon: {
      marginRight: metrics.moderateScale(5),
    },
    loadingIndicator: {
      marginRight: metrics.moderateScale(5),
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonIconLoadingIndicator: {
      marginRight: 0,
    },
  });

  return { styles, getTextColor, getTextAndIconSize };
};
