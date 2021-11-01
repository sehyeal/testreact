import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      main: "black",
      sub: "#575757",
      white: "white",
      gray93: "#939393",
      gray106: "rgb(106, 106, 106)",
      gray112: "rgb(112, 112, 112)",
      gray182: "rgb(182, 182, 182)",
      gray217: "rgb(217, 217, 217)",
      red: "rgb(232, 0, 0)",
      preorder: "rgb(248, 184, 10)",
    },
    fontSizes: {
      xxlFontSize: 18,
      xlFontSize: 16,
      lgFontSize: 15,
      defaultFontSize: 14,
      mdFontSize: 13,
      smFontSize: 12,
      xsFontSize: 11,
      xxsFontSize: 10,
    },
    sizes: {
      // 화면
      pcContentWidth: 1100,
      mobileProductImgHeight: 375,
    },
    lineHeights: {
      lh20: 2.0,
      lh15: 1.5,
      lh10: 1.0,
    },
  },
  media: {
    md: "(width >= 750px)",
    lg: "(width >= 1080px)",
    xl: "(width >= 1284px)",
    xxl: "(width >= 1536px)",
  },
});
