import { font } from '@/styles';
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
const { SFProRounded } = font.family;

export const useTextStyles = () => {
  const defaultFontFamily = SFProRounded;

  const createFontStyle = (
    fontWeight: ViewStyle | TextStyle | ImageStyle,
    fontSize: ViewStyle | TextStyle | ImageStyle,
  ) =>
    StyleSheet.create({
      fontFamily: defaultFontFamily,
      fontWeight,
      fontSize,
      letterSpacing: font.letterSpacing.zero,
      lineHeight: font.lineHeight.normal,
    });

  return {
    biggest: createFontStyle(font.weight.regular, font.size.biggest),
    biggestBold: createFontStyle(font.weight.bold, font.size.biggest),
    biggestMedium: createFontStyle(font.weight.medium, font.size.biggest),
    biggestLight: createFontStyle(font.weight.light, font.size.biggest),

    big: createFontStyle(font.weight.regular, font.size.big),
    bigBold: createFontStyle(font.weight.bold, font.size.big),
    bigMedium: createFontStyle(font.weight.medium, font.size.big),
    bigLight: createFontStyle(font.weight.light, font.size.big),

    headline: createFontStyle(font.weight.regular, font.size.headline),
    headlineBold: createFontStyle(font.weight.bold, font.size.headline),
    headlineMedium: createFontStyle(font.weight.medium, font.size.headline),
    headlineLight: createFontStyle(font.weight.light, font.size.headline),

    heading: createFontStyle(font.weight.regular, font.size.large),
    headingBold: createFontStyle(font.weight.bold, font.size.large),
    headingMedium: createFontStyle(font.weight.medium, font.size.large),
    headingLight: createFontStyle(font.weight.light, font.size.large),

    subheading: createFontStyle(font.weight.regular, font.size.medium),
    subheadingBold: createFontStyle(font.weight.bold, font.size.medium),
    subheadingMedium: createFontStyle(font.weight.medium, font.size.medium),
    subheadingLight: createFontStyle(font.weight.light, font.size.medium),

    body: createFontStyle(font.weight.regular, font.size.smedium),
    bodyBold: createFontStyle(font.weight.bold, font.size.smedium),
    bodyMedium: createFontStyle(font.weight.medium, font.size.smedium),
    bodyLight: createFontStyle(font.weight.light, font.size.smedium),

    small: createFontStyle(font.weight.regular, font.size.smaller),
    smallBold: createFontStyle(font.weight.bold, font.size.smaller),
    smallMedium: createFontStyle(font.weight.medium, font.size.smaller),
    smallLight: createFontStyle(font.weight.light, font.size.smaller),

    tiny: createFontStyle(font.weight.regular, font.size.tiny),
    tinyBold: createFontStyle(font.weight.bold, font.size.tiny),
    tinyMedium: createFontStyle(font.weight.medium, font.size.tiny),
    tinyLight: createFontStyle(font.weight.light, font.size.tiny),

    micro: createFontStyle(font.weight.regular, font.size.micro),
    microBold: createFontStyle(font.weight.bold, font.size.micro),
    microMedium: createFontStyle(font.weight.medium, font.size.micro),
    microLight: createFontStyle(font.weight.light, font.size.micro),
  };
};

export enum TextVariant {
  biggest = 'biggest',
  biggestBold = 'biggestBold',
  biggestMedium = 'biggestMedium',
  biggestLight = 'biggestLight',
  big = 'big',
  bigBold = 'bigBold',
  bigMedium = 'bigMedium',
  bigLight = 'bigLight',
  headline = 'headline',
  headlineBold = 'headlineBold',
  headlineMedium = 'headlineMedium',
  headlineLight = 'headlineLight',
  heading = 'heading',
  headingBold = 'headingBold',
  headingMedium = 'headingMedium',
  headingLight = 'headingLight',
  subheading = 'subheading',
  subheadingBold = 'subheadingBold',
  subheadingMedium = 'subheadingMedium',
  subheadingLight = 'subheadingLight',
  body = 'body',
  bodyBold = 'bodyBold',
  bodyMedium = 'bodyMedium',
  bodyLight = 'bodyLight',
  small = 'small',
  smallBold = 'smallBold',
  smallMedium = 'smallMedium',
  smallLight = 'smallLight',
  tiny = 'tiny',
  tinyBold = 'tinyBold',
  tinyMedium = 'tinyMedium',
  tinyLight = 'tinyLight',
  micro = 'micro',
  microBold = 'microBold',
  microMedium = 'microMedium',
  microLight = 'microLight',
}
