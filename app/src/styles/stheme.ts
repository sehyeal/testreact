import {styled, theme} from './stitches.config';

const defaultTextVariants = {
  color: {
    main: {
      color: theme.colors.main,
    },
    sub: {
      color: theme.colors.sub,
    },
    white: {
      color: theme.colors.white,
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
    red232: {
      color: theme.colors.red232,
    },
    isActiveRed: {
      color: theme.colors.red232,
    },
    preorder: {
      color: theme.colors.preorder,
    },
  },
  font: {
    18: {
      fontSize: theme.fontSizes.fontSize18,
    },
    16: {
      fontSize: theme.fontSizes.fontSize16,
    },
    15: {
      fontSize: theme.fontSizes.fontSize15,
    },
    14: {
      fontSize: theme.fontSizes.fontSize14,
    },
    13: {
      fontSize: theme.fontSizes.fontSize13,
    },
    12: {
      fontSize: theme.fontSizes.fontSize12,
    },
    11: {
      fontSize: theme.fontSizes.fontSize11,
    },
    10: {
      fontSize: theme.fontSizes.fontSize10,
    },
    b18: {
      fontSize: theme.fontSizes.fontSize18,
      fontWeight: 'bold',
    },
    b16: {
      fontSize: theme.fontSizes.fontSize16,
      fontWeight: 'bold',
    },
    b15: {
      fontSize: theme.fontSizes.fontSize15,
      fontWeight: 'bold',
    },
    b14: {
      fontSize: theme.fontSizes.fontSize14,
      fontWeight: 'bold',
    },
    b13: {
      fontSize: theme.fontSizes.fontSize13,
      fontWeight: 'bold',
    },
    b12: {
      fontSize: theme.fontSizes.fontSize12,
      fontWeight: 'bold',
    },
    b11: {
      fontSize: theme.fontSizes.fontSize11,
      fontWeight: 'bold',
    },
    b10: {
      fontSize: theme.fontSizes.fontSize10,
      fontWeight: 'bold',
    },
  },
  lh: {
    lh20: {lineHeight: theme.lineHeights.lh20},
    lh15: {lineHeight: theme.lineHeights.lh15},
    lh10: {lineHeight: theme.lineHeights.lh10},
  },
};

export const StyledText = styled('Text', {
  variants: {
    ...defaultTextVariants,
    color: {
      ...defaultTextVariants.color,
      warning: {
        color: 'blue',
      },
    },
  },
  defaultVariants: {
    color: 'main',
    font: 'default',
  },
});

export const ButtonText = styled('Text', {
  cursor: 'pointer',
  variants: {
    ...defaultTextVariants,
  },
  defaultVariants: {
    color: 'main',
    font: 'sm',
  },
});

export const FlexView = styled('View', {
  display: 'flex',
  variants: {
    type: {
      row: {
        flexDirection: 'row',
      },
      rowStart: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      rowCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      rowEnd: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      col: {
        flexDirection: 'column',
      },
      colStart: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
      colCenter: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      colEnd: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
      },
      colBetween: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    },
  },
});

export const StyledBadge = styled('Text', {
  px: 2,
  h: 12,
  fontSize: 8,
  paddingVertical: 1,
  marginLeft: 2,
  color: theme.colors.white,
  variants: {
    type: {
      pick: {
        backgroundColor: theme.colors.preorder,
      },
      preorder: {
        backgroundColor: theme.colors.preorder,
      },
      sale: {
        backgroundColor: theme.colors.red232,
      },
      today: {
        backgroundColor: theme.colors.red232,
      },
      new: {
        backgroundColor: theme.colors.preorder,
      },
      kids: {
        backgroundColor: theme.colors.green174,
      },
      buyable: {
        backgroundColor: theme.colors.preorder,
      },
      bonew: {
        backgroundColor: theme.colors.preorder,
      },
      season: {
        backgroundColor: theme.colors.main,
      },
    },
    first: {
      true: {
        marginLeft: 0,
      },
    },
  },
});

export const StyledImage = styled('Image', {
  variants: {
    size: {
      product: {
        w: 160,
        h: 160,
      },
    },
    resize: {
      contain: {
        resizeMode: 'contain',
      },
      cover: {
        resizeMode: 'cover',
      },
    },
  },
});
