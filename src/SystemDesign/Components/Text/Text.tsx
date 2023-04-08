import { font } from '@/styles';
import {
  FontLetterSpacing,
  FontLineHeight,
  FontSize,
  FontWeight,
} from '@/styles/fonts';
import React from 'react';
import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';

export interface TextProps extends Omit<RNTextProps & any, 'style'> {
  children: React.ReactNode | undefined;
  color?: string;
  uppercase?: boolean;
  capitalize?: boolean;
  style?: any;
  size?: FontSize;
  weight?: FontWeight;
  spacing?: FontLetterSpacing;
  lineHeight?: FontLineHeight;
}

const Text: React.FC<TextProps> = props => {
  const {
    children,
    style,
    color,
    uppercase,
    size,
    weight,
    lineHeight,
    spacing,
  } = props;

  const styles = StyleSheet.create({
    uppercase: {
      textTransform: uppercase ? 'uppercase' : 'none',
      letterSpacing: uppercase
        ? font.letterSpacing.zero
        : font.letterSpacing.zero,
    },
    container: {
      fontFamily: font.family.SFProRounded,
      fontSize: font.size[size || 'bmedium'],
      fontWeight: font.weight[weight || 'regular'],
      letterSpacing: font.letterSpacing[spacing || 'zero'],
      lineHeight: font.lineHeight[lineHeight || 'normal'],
    },
  });
  return (
    <RNText
      {...props}
      style={[
        styles.container,
        {
          color,
        },
        styles.uppercase,
        style,
      ]}>
      {children as string}
    </RNText>
  );
};

export default Text;
