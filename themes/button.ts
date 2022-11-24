import { SystemStyleObject } from '@chakra-ui/react'

const baseText = {
  fontSize: '1rem',
  fontWeight: 'bold',
  lineHeight: '22px',
}

function iconSize(w: number, p: number): SystemStyleObject {
  return {
    w: `${w}px`,
    h: `${w}px`,
    p: `${p}px`,
  }
}

const sizes: Record<string, SystemStyleObject> = {
  xs: {
    ...baseText,

    h: '32px',
    padding: '9px 16px',
  },
  sm: {
    ...baseText,
    h: '40px',
    padding: '9px 24px',
  },
  md: {
    ...baseText,
    h: '48px',
    padding: '13px 24px',
  },
  smallCart: {
    ...baseText,
    h: '48px',
    padding: '16px 28px',
  },
  cart: {
    ...baseText,
    h: '64px',
    padding: '16px 32px',
  },
  iconXS: iconSize(24, 4),
  iconSM: iconSize(32, 6),
  iconMD: iconSize(40, 8),
  iconLG: iconSize(48, 10),
  iconXL: iconSize(56, 12),
  icon2XL: iconSize(64, 14),
  icon3XL: iconSize(72, 16),
}

const baseButton = {
  rounded: 'full',
  width: 'fit-content',
  border: 0,
  outline: 0,
  _focus: {
    outline: 0,
    boxShadow: 0,
  },
}

const primary: SystemStyleObject = {
  ...baseButton,
  bg: 'dark_green',
  color: 'white',
  _active: {
    bg: 'hover',
  },
  _focusVisible: {
    outlineOffset: '-4px',
    outlineColor: 'white',
    outlineWidth: '2px',
    outlineStyle: 'solid',
  },
  _hover: {
    bg: 'hover',
    _disabled: {
      bg: 'disabled',
    },
  },
  _disabled: {
    bg: 'disabled',
    color: 'disabeld_text',
    opacity: 1,
  },
}

const secondary: SystemStyleObject = {
  ...baseButton,
  bg: 'transparent',
  color: 'dark_green',
  borderStyle: 'solid',
  borderWidth: '2px',
  borderColor: 'dark_green',
  _active: {
    bg: 'lighten',
  },
  _hover: {
    bg: 'lighten',
  },
  _focusVisible: {
    outlineOffset: '-6px',
    outlineColor: 'dark_green',
    outlineWidth: '2px',
    outlineStyle: 'solid',
  },
  _disabled: {
    borderColor: 'disabled',
    color: 'disabled',
    opacity: 1,
  },
}

const secondaryW: SystemStyleObject = {
  ...baseButton,
  bg: 'transparent',
  color: 'white',
  borderStyle: 'solid',
  borderWidth: '2px',
  borderColor: 'white',
  _active: {
    bg: 'white_hover',
  },
  _hover: {
    bg: 'white_hover',
  },
  _focusVisible: {
    outlineOffset: '-6px',
    outlineColor: 'white',
    outlineWidth: '2px',
    outlineStyle: 'solid',
  },
  _disabled: {
    borderColor: 'disabled',
    color: 'disabled',
    opacity: 1,
  },
}

const iconG: SystemStyleObject = {
  ...primary,
  _hover: {
    bg: 'white_hover',
  },
  _active: {
    bg: 'white_hover',
  },
  _focusVisible: {
    outlineOffset: '-6px',
    outlineColor: 'white',
    outlineWidth: '2px',
    outlineStyle: 'solid',
  },
}

const iconW: SystemStyleObject = {
  ...baseButton,
  bg: 'white',
  color: 'dark_green',
  border: 0,
  _active: {
    bg: 'lighten',
  },
  _hover: {
    bg: 'lighten',
  },
  _focusVisible: {
    outlineOffset: '-6px',
    outlineColor: 'dark_green',
    outlineWidth: '2px',
    outlineStyle: 'solid',
  },
  _disabled: {
    color: 'white',
    bg: 'disabled',
    opacity: 1,
  },
}

export const Button = {
  sizes,
  variants: {
    primary,
    secondary,
    secondaryW,
    iconG,
    iconW,
    ghost: {
      border: null,
      outline: null,
      boxShadow: 'none',
      bg: null,
      fontWeight: null,
      borderRadius: null,
      minWidth: null,
      w: null,
      _active: {
        bg: null,
      },
      _hover: {
        bg: null,
      },
      _focus: {
        outline: null,
        boxShadow: null,
      },
    },
  },
  defaultProps: {
    size: '',
    variant: '',
    colorScheme: '',
  },
}
