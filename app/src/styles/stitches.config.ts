import {createStitches} from 'stitches-native';

export const {
  styled,
  css,
  theme,
  createTheme,
  useTheme,
  ThemeProvider,
  config,
} = createStitches({
  theme: {
    colors: {
      main: 'black',
      sub: '#575757',
      white: 'white',
      gray93: '#939393',
      gray106: 'rgb(106, 106, 106)',
      gray112: 'rgb(112, 112, 112)',
      gray182: 'rgb(182, 182, 182)',
      gray217: 'rgb(217, 217, 217)',
      red232: 'rgb(232, 0, 0)',
      preorder: 'rgb(248, 184, 10)',
      green174: 'rgb(174, 212, 185)',
    },
    fontSizes: {
      fontSize18: 18,
      fontSize16: 16,
      fontSize15: 15,
      fontSize14: 14,
      fontSize13: 13,
      fontSize12: 12,
      fontSize11: 11,
      fontSize10: 10,
    },
    sizes: {
      // 화면
      mobileProductImgHeight: 375,
    },
    lineHeights: {
      lh20: 20,
      lh15: 15,
      lh10: 10,
    },
  },
  media: {
    md: '(width >= 750px)',
    lg: '(width >= 1080px)',
    xl: '(width >= 1284px)',
    xxl: '(width >= 1536px)',
  },
  utils: {
    w: (value: number) => ({
      width: value,
    }),
    h: (value: number) => ({
      height: value,
    }),
    px: (value: number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});
