import { globalColors } from '@/theme/palette';
import chroma from 'chroma-js';
import currentColors from '../theme/currentColors';
import { memoFn } from '../utils/memoFn';

export const colorShades = {};

const buildRgba = memoFn(
  (color: string, alpha = 1) => `rgba(${chroma(color).rgb()},${alpha})`,
);

export type Colors = ReturnType<typeof getColorsByTheme>;

const darkModeColors = {
  appleBlue: '#1F87FF',
  black: '#FFFFFF',
  blueGreyDark: '#E0E8FF',
  blueGreyDark04: '#222326',
  blueGreyDark20: '#3A3D45',
  blueGreyDark30: '#50535E',
  blueGreyDark40: '#646876',
  blueGreyDark50: '#797D8B',
  blueGreyDarker: '#000000',
  blueGreyDarkLight: '#1E2027',
  brightRed: '#FF5252',
  cardBackdrop: '#12131A',
  dark: '#E0E8FF',
  darkGrey: '#333333',
  darkModeDark: '#404656',
  exchangeFallback: 'rgba(60, 66, 82, 0.8)',
  green: '#4BD166',
  grey: '#333333',
  grey20: '#333333',
  lighterGrey: '#12131A',
  lightestGrey: '#FFFFFF',
  lightGrey: '#333333',
  lightOrange: '#FFA64D',
  offWhite: '#1F222A',
  offWhite80: '#1C1F27',
  placeholder: 'rgba(224, 232, 255, 0.4)',
  rowDivider: 'rgba(60, 66, 82, 0.075)',
  rowDividerExtraLight: 'rgba(60, 66, 82, 0.0375)',
  rowDividerFaint: 'rgba(60, 66, 82, 0.025)',
  rowDividerLight: 'rgba(60, 66, 82, 0.05)',
  shadow: '#000000',
  shadowBlack: '#000000',
  shadowGrey: '#000000',
  shimmer: '#1F2229',
  skeleton: '#191B21',
  stackBackground: '#000000',
  surfacePrimary: '#000000',
  white: '#12131A',
  whiteLabel: '#FFFFFF',
  backgrounds: {
    surfacePrimary: globalColors.darker,
    surfacePrimaryElevated: globalColors.darker,
    surfaceSecondary: globalColors.darker,
    surfaceSecondaryElevated: globalColors.dark,
    fill: globalColors.white30,
    fillSecondary: globalColors.white20,
    blue: globalColors.blue50,
    green: globalColors.green50,
    red: globalColors.red50,
    purple: globalColors.purple50,
    pink: globalColors.pink50,
    orange: globalColors.orange50,
    yellow: globalColors.yellow50,
    action: globalColors.appleBlue,
    body: globalColors.blackTint,
    card: globalColors.dark,
    cardBackdrop: globalColors.darker,
    swap: globalColors.swapPurple,
    appBackground: globalColors.darker,
  },
};

const getColorsByTheme = (isDarkMode?: boolean) => {
  let base = {
    appleBlue: '#0E76FD', // '14, 118, 253'
    appleBlue06: 'rgba(14, 118, 253, 0.06)',
    black: '#000000', // '0, 0, 0'
    blueGreyDark: '#3C4252', // '60, 66, 82'
    blueGreyDark04: '#222326', // this color is blueGreyDark at 4% over white
    blueGreyDark20: '#3A3D45', // this color is blueGreyDark at 20% over white
    blueGreyDark30: '#C5C6CB', // this color is blueGreyDark at 30% over white
    blueGreyDark40: '#B1B3BA', // this color is blueGreyDark at 40% over white
    blueGreyDark50: '#9DA0A8', // this color is blueGreyDark at 50% over white
    blueGreyDark60: '#898D97', // this color is blueGreyDark at 60% over white
    blueGreyDark80: '#636875', // this color is blueGreyDark at 80% over white
    blueGreyDarker: '#0F0F11', // '15, 15, 17'
    blueGreyDarkLight: '#F3F4F5', // '243, 244, 245'
    brightRed: '#FF7171', // '255, 113, 113'
    cardBackdrop: '#F5F5F7', // '245, 245, 247'
    chartGreen: '#66D28F', // '102, 210, 143'
    dark: '#25292E', // '37, 41, 46'
    darkGrey: '#71778A', // '113, 119, 138'
    darkModeDark: '#404656',
    dogeGold: '#FCAC34', // '252, 172, 52'
    dogeGold06: 'rgba(252, 172, 52, 0.06)',
    dpiDark: '#8150E6', // '129, 80, 230'
    dpiLight: '#9B74EC', // '155, 116, 236'
    dpiMid: '#8E62E9', // '142, 98, 233'
    exchangeFallback: '#F4F4F5', // '244, 244, 245'
    flamingo: '#E540F1', // '229, 64, 241'
    grey: '#A9ADB9', // '169, 173, 185'
    grey20: '#333333', // '51, 51, 51'
    lighterGrey: '#F7F7F8', // '247, 247, 248'
    lightestGrey: '#E9EBEF', // '238, 233, 232'
    lightGrey: '#CDCFD4', // '205, 207, 212'
    lightOrange: '#FFA64D', // '255, 166, 77'
    mediumGrey: '#A1A5B3', // '161, 165, 179'
    mintDark: '#00E0A9', // '0, 224, 169'
    neonSkyblue: '#34FFFF', // '52, 255, 255'
    offWhite: '#F8F9FA', // '248, 249, 250'
    offWhite80: '#1C1F27',
    optimismRed: '#FF0420', // '255, 4, 32',
    optimismRed06: 'rgba(255, 4, 32, 0.06)', // '255, 4, 32, 0.06'
    orange: '#F46E38', // '244, 110, 56'
    orangeLight: '#FEBE44', // '254, 190, 68'
    paleBlue: '#579DFF', // 87, 157, 255
    pink: '#FF54BB', // 255, 84, 187
    pinkLight: '#FF75E8', // '255, 117, 232'
    poolyPurple: '#6434C4', // '100, 52, 196'
    poolyPurple06: 'rgba(100, 52, 196, 0.06)',
    purpleDark: '#6F00A3', // '111, 0, 163'
    purpleLight: '#FFD9FE', // '255, 217, 254'
    purpleUniswap: '#FF007A', // '255,0,122',
    rainbowBlue: '#001E59', // '0, 30, 89',
    rainbowBlue06: 'rgba(0, 30, 89, 0.06)', // '0, 30, 89, 0.06'
    rowDivider: 'rgba(60, 66, 82, 0.03)', // '60, 66, 82, 0.03'
    rowDividerExtraLight: 'rgba(60, 66, 82, 0.015)', // '60, 66, 82, 0.015'
    rowDividerFaint: 'rgba(60, 66, 82, 0.01)', // '60, 66, 82, 0.01'
    rowDividerLight: 'rgba(60, 66, 82, 0.02)', // '60, 66, 82, 0.02'
    shadow: '#25292E', // '37, 41, 46'
    shadowBlack: '#000000', // '0, 0, 0'
    shadowGrey: '#6F6F6F', // '111, 111, 111'
    shimmer: '#EDEEF1', // '237, 238, 241'
    skeleton: '#F6F7F8', // '246, 247, 248'
    smolPurple: '#7D50E6', // '125, 80, 230'
    smolPurple06: 'rgba(125, 80, 230, 0.06)', // '125, 80, 230, 0.06'
    stackBackground: '#000000', // '0, 0, 0'
    swapPurple: '#575CFF', // '87, 92, 255'
    transparent: 'transparent',
    trueBlack: '#000000', // '0, 0, 0'
    uniswapPink: '#DC6BE5', // '229, 64, 241',
    white: '#FFFFFF', // '255, 255, 255'
    whiteLabel: '#FFFFFF', // '255, 255, 255'
    yellow: '#FFD657', // '255, 214, 87'
    yellowFavorite: '#FFB200', // '255, 178, 0'
    yellowOrange: '#FFC400', // '255, 196, 0',
    red: '#FF494A', // '255, 73, 74'
    green: '#2CCC00', // '58, 166, 134'

    backgrounds: {
      surfacePrimary: globalColors.white100,
      surfacePrimaryElevated: globalColors.white100,
      surfaceSecondary: globalColors.blueGrey10,
      surfaceSecondaryElevated: globalColors.white100,
      fill: globalColors.grey30,
      fillSecondary: globalColors.grey20,
      blue: globalColors.blue60,
      green: globalColors.green60,
      red: globalColors.red60,
      purple: globalColors.purple60,
      pink: globalColors.pink60,
      orange: globalColors.orange60,
      yellow: globalColors.yellow60,
      action: globalColors.appleBlueLight,
      body: globalColors.white,
      card: globalColors.white,
      cardBackdrop: globalColors.offwhite,
      swap: globalColors.swapPurple,
      // darken the white background for the app
      appBackground: chroma(globalColors.white).darken(0.2).hex(),
    },
  };

  const gradients = {
    appleBlueTintToAppleBlue: ['#15B1FE', base.appleBlue],
    blueToGreen: ['#4764F7', '#23D67F'],
    checkmarkAnimation: ['#1FC24A10', '#1FC24A10', '#1FC24A00'],
    ens: ['#456AFF', '#5FA9EE'],
    lighterGrey: [buildRgba('#ECF1F5', 0.15), buildRgba('#DFE4EB', 0.5)],
    lightestGrey: ['#FFFFFF', '#F2F4F7'],
    lightestGreyReverse: ['#F2F4F7', '#FFFFFF'],
    lightGrey: [buildRgba('#ECF1F5', 0.5), buildRgba('#DFE4EB', 0.5)],
    lightGreyTransparent: [
      buildRgba(base.blueGreyDark, 0.02),
      buildRgba(base.blueGreyDark, 0.06),
    ],
    lightGreyWhite: [buildRgba('#F0F2F5', 0.5), buildRgba('#FFFFFF', 0.5)],
    offWhite: [base.white, base.offWhite],
    rainbow: ['#FFB114', '#FF54BB', '#7EA4DE'],
    savings: ['#FFFFFF', '#F7F9FA'],
    searchBar: ['#FCFDFE', '#F0F2F5'],
    sendBackground: ['#FAFAFA00', '#FAFAFAFF'],
    success: ['#FAFF00', '#2CCC00'],
    successTint: ['#FFFFF0', '#FCFEFB'],
    swapPurpleTintToSwapPurple: ['#7D85FF', base.swapPurple],
    transparentToAppleBlue: [
      buildRgba(base.appleBlue, 0.02),
      buildRgba(base.appleBlue, 0.06),
    ],
    transparentToRed: [buildRgba(base.red, 0), buildRgba(base.red, 0.06)],
    transparentToGreen: [buildRgba(base.green, 0), buildRgba(base.green, 0.06)],
    transparentToLightGrey: [
      buildRgba(base.blueGreyDark, 0),
      buildRgba(base.blueGreyDark, 0.06),
    ],
    transparentToLightOrange: [
      buildRgba(base.lightOrange, 0),
      buildRgba(base.lightOrange, 0.06),
    ],
    vividRainbow: ['#FFB114', '#FF54BB', '#00F0FF'],
    vividRainbowTint: ['#FFFAF1', '#FFF5FB', '#F0FEFF'],
    warning: ['#FFD963', '#FFB200'],
    warningTint: ['#FFFDF6', '#FFFBF2'],
    white80ToTransparent: [
      buildRgba(base.whiteLabel, 0.8),
      buildRgba(base.whiteLabel, 0),
    ],
    whiteButton: ['#FFFFFF', '#F7F9FA'],
  };

  const isColorLight = memoFn(
    (targetColor: string) =>
      chroma(targetColor ?? base.white).luminance() > 0.5,
  );

  const getTextColorForBackground = (
    targetColor: string,
    textColors?: { dark: string; light: string },
  ) => {
    const dark = textColors?.dark ?? base.black;
    const light = textColors?.light ?? base.white;
    if (targetColor === 'transparent') {
      return dark; // Return default dark color
    }

    return isColorLight(targetColor) ? dark : light;
  };

  const getFallbackTextColor = (backgroundColor: string): string =>
    colors.getTextColorForBackground(backgroundColor, {
      dark: colors.alpha(colors.blueGreyDark, 0.5),
      light: colors.whiteLabel,
    });

  if (isDarkMode) {
    base = {
      ...base,
      ...darkModeColors,
    };
  }

  const isColorDark = memoFn((targetColor: string) => {
    if (targetColor === 'transparent') {
      return true;
    }
    return (
      chroma.contrast(targetColor, darkModeColors.white) < 1.5 ||
      chroma(targetColor ?? base.white).luminance() < 0.11
    );
  });

  const brighten = memoFn((targetColor: string, amount: number = 2) =>
    chroma(targetColor).brighten(amount).saturate(0.3).hex(),
  );

  const light = {
    clearBlue: buildRgba(base.appleBlue, 0.06),
    clearGrey: buildRgba(base.blueGreyDark, 0.06),
  };

  return {
    ...base,
    getTextColorForBackground,
    getFallbackTextColor,
    isColorDark,
    isColorLight,
    brighten,
    alpha: buildRgba,
    gradients,
    ...light,
  };
};

export const darkModeThemeColors = getColorsByTheme(true);
export const lightModeThemeColors = getColorsByTheme(false);
const colors = currentColors.themedColors ?? lightModeThemeColors;

export default {
  ...colors,
  darkModeColors,
  darkModeThemeColors,
  lightModeThemeColors,
};
