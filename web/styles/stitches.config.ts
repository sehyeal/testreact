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
      background: "#252525",
      backgroundBody: "#191919",
      backgroundLight: "#333333",
      backgroundForm: "#252525",
      backgroundDark: "#000000",
      default: "#aaa",
      main: "#fff",
      sub: "#aaaaaa",
      dark: "#575757",
      primary: "#ee4135",
      secondary: "#313131",
      warning: "#ff00f5",
      disabled: "#575757",
      border: "#575757",
      borderDark: "#393939",
      inputBg: "#333333",
    },
    sizes: {
      mobile: 768,
      tablet: 1024,
      desktop: 1400,
      container: 1100,
      aside: 240,
      smallContainer: 490,
    },
  },
});
