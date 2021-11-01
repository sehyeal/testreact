import { styled, theme } from "./stitches.config";

const defaultTextVariants = {
  color: {
    main: {
      color: theme.colors.main,
    },
    sub: {
      color: theme.colors.sub,
    },
    gray93: {
      color: theme.colors.gray93,
    },
    gray106: {
      color: theme.colors.gray106,
    },
    gray112: {
      color: theme.colors.gray112,
    },
    gray182: {
      color: theme.colors.gray182,
    },
    gray217: {
      color: theme.colors.gray217,
    },
    isActiveRed: {
      color: theme.colors.red,
    },
    preorder: {
      color: theme.colors.preorder,
    },
  },
  font: {
    xxl: {
      fontSize: theme.fontSizes.xxlFontSize,
    },
    xl: {
      fontSize: theme.fontSizes.xlFontSize,
    },
    lg: {
      fontSize: theme.fontSizes.lgFontSize,
    },
    default: {
      fontSize: theme.fontSizes.defaultFontSize,
    },
    md: {
      fontSize: theme.fontSizes.mdFontSize,
    },
    sm: {
      fontSize: theme.fontSizes.smFontSize,
    },
    xs: {
      fontSize: theme.fontSizes.xsFontSize,
    },
    xxs: {
      fontSize: theme.fontSizes.xxsFontSize,
    },
  },
  lh: {
    lh20: { lineHeight: theme.lineHeights.lh20 },
    lh15: { lineHeight: theme.lineHeights.lh15 },
    lh10: { lineHeight: theme.lineHeights.lh10 },
  },
};

export const StyledText = styled("span", {
  variants: {
    ...defaultTextVariants,
    color: {
      ...defaultTextVariants.color,
      warning: {
        color: "blue",
      },
    },
  },
  defaultVariants: {
    color: "main",
    font: "default",
    lh: "lh20",
  },
});

export const ButtonText = styled("span", {
  cursor: "pointer",
  variants: {
    ...defaultTextVariants,
  },
  defaultVariants: {
    color: "main",
    font: "sm",
  },
});

export const Container = styled("div", {
  maxWidth: theme.sizes.pcContentWidth,
  width: "100%",
  margin: "auto",
  position: "relative",
  paddingLeft: 15,
  paddingRight: 15,
});

export const FlexView = styled("div", {
  display: "flex",
  variants: {
    type: {
      row: {
        flexDirection: "row",
      },
      rowStart: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      },
      rowCenter: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
      rowEnd: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
      },
      rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      col: {
        flexDirection: "column",
      },
      colStart: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      },
      colCenter: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
      colEnd: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
      },
      colBetween: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      },
    },
  },
});
