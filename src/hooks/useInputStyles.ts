import { colors, fonts, metrics, palette } from '../theme';

interface Props {
  color: string;
  disabled?: boolean;
  error?: string | null;
  isFocused?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
}
const useInputStyles = ({
  color,
  disabled,
  error,
  isFocused,
  multiline,
  numberOfLines = 1,
}: Props) => {
  const inputContainerStylesCases = {
    disabled: {
      borderColor: palette['disabled' as keyof typeof palette]?.main,
      backgroundColor: palette['disabled' as keyof typeof palette]?.light,
    },
    error: {
      borderColor: palette['error' as keyof typeof palette]?.main,
    },
  };

  const iconColor = disabled
    ? palette['disabled' as keyof typeof palette]?.main
    : palette['text' as keyof typeof palette]?.main;
  return {
    mainContainerStyles: {},
    inputContainerStyles: {
      borderColor: isFocused
        ? palette[color as keyof typeof palette]?.main
        : colors.lightGrey[600],
      ...(disabled && inputContainerStylesCases.disabled),
      ...(error && inputContainerStylesCases.error),
    },
    inputStyles: {
      height: multiline ? metrics.moderateScale(10 * numberOfLines) : null,
    },
    iconStyles: {
      color: iconColor,
      size: metrics.moderateScale(16),
    },
    errorMessageStyles: {
      ...fonts.defaultTextStyle,
      color: palette['error' as keyof typeof palette]?.main,
      fontSize: metrics.moderateScale(10),
    },
  };
};

export default useInputStyles;
