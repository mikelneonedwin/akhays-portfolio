import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ 
  config,
  colors: {
    brand: {
      50: '#f3e6ff',
      100: '#d5b3ff',
      200: '#b680ff',
      300: '#974dff',
      400: '#791aff',
      500: '#6600ff',  // Primary purple
      600: '#5200cc',
      700: '#3d0099',
      800: '#290066',
      900: '#140033',
    },
    accent: {
      50: '#e6f7ff',
      100: '#b3e7ff',
      200: '#80d6ff',
      300: '#4dc6ff',
      400: '#1ab5ff',  // Blue accent
      500: '#00a3ff',
      600: '#0082cc',
      700: '#006299',
      800: '#004166',
      900: '#002033',
    },
    gray: {
      50: '#f7f7f7',
      100: '#e6e6e6',
      200: '#cccccc',
      300: '#1a1a1a',  // Main background
      400: '#141414',
      500: '#0d0d0d',  // Darker sections
      600: '#080808',
      700: '#050505',
      800: '#030303',
      900: '#000000',
    },
  },
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'gray.300',
        color: 'whiteAlpha.900',
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        overflowX: 'hidden',
      },
      '#root': {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      },
      '::-webkit-scrollbar': {
        width: '8px',
      },
      '::-webkit-scrollbar-track': {
        background: 'rgba(26, 26, 26, 0.7)',
      },
      '::-webkit-scrollbar-thumb': {
        background: 'linear-gradient(180deg, #6600ff 0%, #00a3ff 100%)',
        borderRadius: '4px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: 'linear-gradient(180deg, #791aff 0%, #1ab5ff 100%)',
      },
      '::selection': {
        background: 'brand.500',
        color: 'white',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: '600',
        borderRadius: 'xl',
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
            _disabled: {
              bg: 'brand.500',
            },
          },
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.400',
          borderWidth: '2px',
          _hover: {
            bg: 'whiteAlpha.50',
            borderColor: 'brand.400',
          },
        },
        ghost: {
          color: 'brand.400',
          _hover: {
            bg: 'whiteAlpha.100',
            color: 'brand.300',
          },
        },
        gradient: {
          bg: 'linear-gradient(45deg, #6600ff, #00a3ff)',
          color: 'white',
          _hover: {
            transform: 'translateY(-2px)',
            boxShadow: '0 5px 15px rgba(102, 0, 255, 0.3)',
          },
        },
      },
    },
    Link: {
      baseStyle: {
        color: 'brand.400',
        transition: 'all 0.3s ease',
        _hover: {
          color: 'brand.300',
          textDecoration: 'none',
          transform: 'translateY(-1px)',
        },
      },
    },
    Heading: {
      baseStyle: {
        color: 'whiteAlpha.900',
        letterSpacing: 'tight',
        fontWeight: 'bold',
      },
    },
    Tag: {
      variants: {
        subtle: {
          bg: 'whiteAlpha.100',
          color: 'whiteAlpha.900',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          _hover: {
            bg: 'whiteAlpha.200',
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: 'rgba(26, 26, 26, 0.7)',
          backdropFilter: 'blur(10px)',
          borderRadius: 'xl',
          borderWidth: '1px',
          borderColor: 'whiteAlpha.100',
          transition: 'all 0.3s ease',
          _hover: {
            transform: 'translateY(-5px)',
            boxShadow: '2xl',
          },
        },
      },
    },
  },
})

export default theme 