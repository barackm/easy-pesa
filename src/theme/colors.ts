export const colorShades = {
  blue: {
    main: '#25388D',
    900: '#0C132F',
    800: '#0C132F',
    700: '#19255E',
    600: '#1F2F76',
    500: '#25388D',
    400: '#30449E',
    300: '#384DAA',
    200: '#5464B2',
    100: '#8D9CE4',
    50: '#D3D7E8',
  },
  dmBlack: {
    main: '#13172B',
    900: '#06080E',
    800: '#0A0C16',
    700: '#0D0F1D',
    600: '#101324',
    500: '#13172B',
    400: '#1D223A',
    300: '#283057',
    200: '#272C45',
    100: '#B0B2B8',
    50: '#D0D1D5',
  },
  cyan: {
    main: '#2FF7DF',
    900: '#10524A',
    800: '#187C70',
    700: '#1FA595',
    600: '#27CEBA',
    500: '#2FF7DF',
    400: '#52F8E4',
    300: '#74FAEA',
    200: '#97FBEF',
    100: '#BAFCF4',
    50: '#D5FDF9',
  },
  black: {
    main: '#090D20',
    900: '#03040B',
    800: '#050710',
    700: '#060915',
    600: '#080B1B',
    500: '#090D20',
    400: '#323545',
    300: '#5B5E6A',
    200: '#84868F',
    100: '#ADAEB5',
    50: '#CECFD2',
  },
  lightGrey: {
    main: '#F3F4F9',
    900: '#515153',
    800: '#7A7A7D',
    700: '#A2A3A6',
    600: '#CACBCF',
    500: '#F3F4F9',
    400: '#F5F6FA',
    300: '#F7F8FB',
    200: '#F9F9FC',
    100: '#FBFBFD',
    50: '#FDFDFE',
  },
  grey: {
    main: '#9EA1AE',
    900: '#35363A',
    800: '#4F5157',
    700: '#696B74',
    600: '#848691',
    500: '#9EA1AE',
    400: '#AEB1BB',
    300: '#BEC0C9',
    200: '#CED0D6',
    100: '#DFE0E4',
    50: '#ECECEF',
  },
  white: {
    main: '#FDFDFE',
    900: '#545455',
    800: '#7F7F7F',
    700: '#A9A9A9',
    600: '#D3D3D4',
    500: '#FDFDFE',
    400: '#FDFDFE',
    300: '#FEFEFE',
    200: '#FEFEFE',
    100: '#FEFEFE',
    50: '#FFFFFF',
  },
  yellow: {
    main: '#FFC531',
    900: '#554210',
    800: '#806319',
    700: '#AA8321',
    600: '#F0B212',
    500: '#FFC531',
    400: '#FFCF53',
    300: '#FFD876',
    200: '#FFE298',
    100: '#FFECBA',
    50: '#FFF5DD',
  },
  red: {
    main: '#F65353',
    900: '#521C1C',
    800: '#7B2A2A',
    700: '#A43737',
    600: '#CD4545',
    500: '#F65353',
    400: '#F77070',
    300: '#F98C8C',
    200: '#FAA9A9',
    100: '#FCC6C6',
    50: '#FDDDDD',
  },
  green: {
    main: '#51D868',
    900: '#1B4823',
    800: '#296C34',
    700: '#369045',
    600: '#44B457',
    500: '#51D868',
    400: '#6EDE81',
    300: '#8BE59A',
    200: '#A8EBB3',
    100: '#C5F2CD',
    50: '#DCF7E1',
  },
};

export const themedColors = {
  light: {
    primary: {
      ...colorShades.blue,
    },
    secondary: {
      ...colorShades.cyan,
    },
    background: {
      ...colorShades.white,
    },
    text: {
      ...colorShades.black,
    },
    error: {
      ...colorShades.red,
    },
    success: {
      ...colorShades.green,
    },
    warning: {
      ...colorShades.yellow,
    },
    info: {
      ...colorShades.blue,
    },
    grey: {
      ...colorShades.lightGrey,
    },
    lightGrey: {
      ...colorShades.lightGrey,
    },
    white: {
      ...colorShades.white,
    },
  },
  dark: {
    primary: {
      ...colorShades.blue,
    },
    secondary: {
      ...colorShades.cyan,
    },
    background: {
      ...colorShades.dmBlack,
    },
    text: {
      ...colorShades.white,
    },
    error: {
      ...colorShades.red,
    },
    success: {
      ...colorShades.green,
    },
    warning: {
      ...colorShades.yellow,
    },
    info: {
      ...colorShades.blue,
    },
    grey: {
      ...colorShades.grey,
    },
    lightGrey: {
      ...colorShades.lightGrey,
    },
    white: {
      ...colorShades.white,
    },
  },
};

export const colors = {
  primary: {
    ...colorShades.blue,
  },
  secondary: {
    ...colorShades.cyan,
  },
  background: {
    ...colorShades.white,
  },
  text: {
    ...colorShades.black,
  },
  error: {
    ...colorShades.red,
  },
  success: {
    ...colorShades.green,
  },
  warning: {
    ...colorShades.yellow,
  },
  info: {
    ...colorShades.blue,
  },
  grey: {
    ...colorShades.lightGrey,
  },
  lightGrey: {
    ...colorShades.lightGrey,
  },
  white: {
    ...colorShades.white,
  },
};

export const getThemeColor = (theme: 'light' | 'dark') => {
  return themedColors[theme];
};
// export the type of the themedColors as colors
export type TColors = typeof themedColors.light;
export type ThemeColors = keyof typeof themedColors;

export const palette = {
  primary: {
    main: colors.primary[300],
    light: colors.primary[100],
    dark: colors.primary[800],
    contrastText: colors.white.main,
  },
  disabled: {
    main: colors.grey.main,
    light: colors.grey[100],
    dark: colors.grey[800],
    contrastText: colors.grey[800],
  },
  error: {
    main: colors.error.main,
    light: colors.error[100],
    dark: colors.error[800],
    contrastText: colors.error[800],
  },
  text: {
    main: colors.text[900],
    light: colors.text[100],
    dark: colors.text[800],
    contrastText: colors.text[800],
  },
  gray: {
    main: colors.grey.main,
    light: colors.grey[100],
    dark: colors.grey[800],
    contrastText: colors.text.main,
  },
  lightGray: {
    main: colors.lightGrey.main,
    light: colors.lightGrey[100],
    dark: colors.lightGrey[800],
    contrastText: colors.text.main,
  },
  secondary: {
    main: colors.secondary.main,
    light: colors.secondary[100],
    dark: colors.secondary[800],
    contrastText: colors.text.main,
  },
};
