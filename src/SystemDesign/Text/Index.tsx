import { TextVariant, useTextStyles } from '@/hooks/styles/useTextStyles';
import { font } from '@/styles';
import React from 'react';
import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';

export interface TextProps extends RNTextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  color?: string;
  uppercase?: boolean;
  capitalize?: boolean;
}

const Text: React.FC<TextProps> = props => {
  const { children, style, variant, color, uppercase, capitalize } = props;
  const defaultStyles = useTextStyles();
  const currentStyles =
    defaultStyles[(variant as TextVariant) || TextVariant.body];

  const styles = StyleSheet.create({
    uppercase: {
      textTransform: uppercase ? 'uppercase' : 'none',
      letterSpacing: uppercase
        ? font.letterSpacing.zero
        : font.letterSpacing.zero,
    },
    container: {},
  });
  return (
    <RNText
      {...props}
      style={[
        styles.container,
        currentStyles,
        {
          color,
        },
        styles.uppercase,
        style,
      ]}>
      {children}
    </RNText>
  );
};

export default Text;
