import { SystemStyleObject } from '@chakra-ui/react'

const sizes: Record<string, SystemStyleObject> = {
  xs: {
    fontSize: '0.625rem',
    lineHeight: '0.755rem',
  },
  sm: {
    fontSize: '0.9rem',
    lineHeight: '0.975rem',
  },
  md: {
    fontSize: '1.1rem',
    lineHeight: '1.2rem',
  },
  lg: {
    fontSize: '1.6rem',
    lineHeight: '1.6rem',
  },
  xl: {
    fontSize: '2rem',
    lineHeight: '2rem',
  },
  '2xl': {
    fontSize: '2.8rem',
    lineHeight: '2.8rem',
  },
}

export const Text = {
  sizes,
  // Outdated, use the color attribute directly instead
  variants: {
    emphasis: {
      textTransform: 'uppercase',
      fontWeight: '500',
      fontSize: '0.625rem',
      lineHeight: '1rem',
    },
    underlined: {
      textDecoration: 'underline',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    fontWeight: '400',
    color: 'main_gray',
  },
}
