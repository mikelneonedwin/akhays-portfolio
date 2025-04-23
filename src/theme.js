import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ 
  config,
  colors: {
    brand: {
      50: '#ffe5e5',
      100: '#ffb3b3',
      200: '#ff8080',
      300: '#ff4d4d',
      400: '#ff1a1a',
      500: '#ff0000',  // Primary
      600: '#cc0000',
      700: '#990000',
      800: '#660000',
      900: '#330000',
    },
    accent: {
      50: '#fff3e0',
      100: '#ffe0b2',
      200: '#ffcc80',
      300: '#ffb74d',
      400: '#ffa726',  // Orange accent
      500: '#ff9100',
      600: '#fb8c00',
      700: '#f57c00',
      800: '#ef6c00',
      900: '#e65100',
    },
    gray: {
      50: '#2d2d2d',
      100: '#252525',
      200: '#1f1f1f',
      300: '#181818',
      400: '#141414',
      500: '#111111',
      600: '#0d0d0d',
      700: '#0a0a0a',
      800: '#070707',
      900: '#000000',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.300',
        color: 'whiteAlpha.900',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        _hover: {
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        },
        _active: {
          transform: 'translateY(0)',
          boxShadow: 'md',
        },
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
        outline: {
          borderColor: 'brand.400',
          color: 'brand.400',
          _hover: {
            bg: 'whiteAlpha.50',
          },
        },
        ghost: {
          color: 'brand.400',
          _hover: {
            bg: 'whiteAlpha.50',
          },
        },
      },
    },
    Link: {
      baseStyle: {
        color: 'brand.400',
        _hover: {
          color: 'brand.300',
          textDecoration: 'none',
        },
      },
    },
    Tag: {
      variants: {
        subtle: {
          bg: 'whiteAlpha.50',
          color: 'brand.300',
        },
      },
    },
  },
})

export default theme 