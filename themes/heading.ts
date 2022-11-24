import { SystemStyleObject } from '@chakra-ui/react'

const sizes: Record<string, SystemStyleObject> = {
  sm: {
    fontSize: { base: '1.8rem' },
    lineHeight: { base: '1.5rem' },
    fontFamily: "'Secular One', sans-serif",
  },
  md: {
    fontSize: { base: '3.1rem' },
    lineHeight: { base: '3.3rem' },
    fontFamily: "'Secular One', sans-serif",
  },
  lg: {
    fontSize: { base: '4rem' },
    lineHeight: { base: '3.6rem' },
    fontWeight: '400',
    fontFamily: "'Secular One', sans-serif",
  },
  xl: {
    fontSize: { base: '4rem' },
    lineHeight: { base: '3.6rem' },
    fontFamily: "'Secular One', sans-serif",
  },
}

export const Heading = {
  sizes,
  variants: {
    withBackline: {
      d: 'inline-block',
      bgGradient:
        'linear(to-t, transparent 5%, green 0%, green 40%, transparent 0%)',
      px: '10px',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
  },
}
