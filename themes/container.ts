import { ComponentStyleConfig } from '@chakra-ui/react'

export const Container: ComponentStyleConfig = {
  variants: {
    boxed: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      px: { base: 5, md: 'inherit' },
      py: { base: 12, md: 16 },
      minW: { base: '100%', md: 'min(90%, 1320px)' },
      maxW: { base: '100%', md: 'min(90%, 1320px)' },
    },
    full: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxW: '100%',
      maxWidth: '100%',
      padding: 0,
    },
  },
}
