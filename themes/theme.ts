import { theme as baseTheme, extendTheme } from '@chakra-ui/react'

import { Button } from './button'
import { Container } from './container'
import { Heading } from './heading'
import { Link } from './link'
import { Text } from './text'

// Breakpoints
// https://chakra-ui.com/docs/features/responsive-styles
// Chakra breakpoints are:
// sm: "30em" = 480px
// md: "48em" = 768px
// lg: "62em" = 992px
// xl: "80em" = 1280px
// "2xl": "96em" = 1536px

// Making sure chakra base sizes are not present
// eslint-disable-next-line @typescript-eslint/no-explicit-any
baseTheme.components.Heading.sizes = undefined as any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
baseTheme.components.Input.sizes = undefined as any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
baseTheme.components.Avatar.sizes = undefined as any

const activeLabelStyles = {
  transform: 'scale(0.9) translateY(-16px)',
}

export const theme = extendTheme({
  components: {
    Heading,
    Link,
    Text,
    Button,
    Container,
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
              input: {
                paddingTop: '0px',
              },
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label':
              {
                ...activeLabelStyles,
              },
            input: {
              paddingTop: '10px',
            },
            label: {
              top: '-4px',
              left: 0,
              zIndex: 2,
              position: 'absolute',
              backgroundColor: 'white',
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top',
              fontSize: '12px',
            },
          },
        },
      },
    },
  },
  breakpoints: {
    '3xl': '106em',
    '4xl': '120em',
  },
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
      'html, body': {
        color: 'main_gray',
      },
    },
  },
  shadows: {
    md: '0px 0px 16px rgba(0, 0, 0, 0.08)',
  },
  fonts: {
    heading: `'SecularOne', ${baseTheme.fonts.heading}`,
    body: `'Nunito', ${baseTheme.fonts.body}`,
  },
  // Thes font size should not be used
  // Use the component's sizes instead
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
  },
  lineHeights: {
    md: '1,4rem',
  },
  colors: {
    dark_green: '#003F2C',
    hover: '#003F2C',
    disabled: '#BDBDBD',
    disabeld_text: '#FFFBF7',
    lighten: '#CCD9D5',
    green: '#00B077',
    orange: '#FF6C4A',
    yellow: '#FFF056',
    blue: '#638DFF',
    white: '#fff',
    creamy: '#FFFBF6',
    white_hover: 'rgba(255, 255, 255, 0.15)',
    light_gray: '#F6F5F1',
    main_gray: '#2A2A2A',
    main_gray_lighten: '#757575',
    second_gray: '#4F4F4F',
    black: '#000',
    border: '#BDBDBD',
    error: '#F64C46',
    radio: {
      500: '#003F2C',
    },
    checkbox: {
      500: '#003F2C',
    },
  },
})
