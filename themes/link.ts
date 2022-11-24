export const Link = {
  baseStyle: {
    _hover: {
      fontWeight: 'bold',
    },
  },
  sizes: {
    xs: {
      fontSize: 'xs',
    },
    sm: {
      fontSize: 'sm',
    },
    md: {
      fontSize: 'md',
    },
    lg: {
      fontSize: 'lg',
      lineHeight: '1.5rem',
    },
  },
  // Two variants: white and green
  variants: {
    white: {
      color: '#fff',
    },
    green: {
      color: 'green.DEFAULT',
    },
    primaryWithoutUnderline: {
      color: 'dark_green',
      textDecoration: 'none',
      fontWeight: '700',
      fontSize: 'md',
    },
    primaryUnderline: {
      color: 'black',
      textDecoration: 'underline',
    },
    small_grey: {
      color: 'light_gray',
      fontSize: 'xs',
      _hover: {
        textDecoration: 'none',
        fontWeight: 'bold',
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    size: '',
    variant: '',
    colorScheme: '',
  },
}
