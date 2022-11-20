import { createTheme } from '@mui/material/styles'
import { hexToRgba } from 'utils/color'

/**
 * * The theme from style guide
 */
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      lighten: '#8ed3ff',
      light: '#4ab4f9',
      main: '#0095f6',
      dark: '#385185',
      darken: '#00376B',
      contrastText: '#ffffff',
    },
    secondary: {
      lighten: '#fafafa',
      light: '#dbdbdb',
      main: '#8e8e8e',
      dark: '#262626',
      contrastText: '#ffffff', // * white
    },
    text: {
      primary: '#2b2b2b', // * secondary.main
      secondary: '#808080', // * Grey text
      tertiary: '#ffffff', // * white
      lighten: '#ecedf0', // * lighten gray
      light: '#949494', // * light gray
      main: '#2b2b2b', // * white
      dark: '#d9d9d9', // * grey
      darken: '#000000', // * black
    },
    background: {
      default: '#f8f9fd', // * background.light
      light: '#f8f9fd', // * pale white
      lighten: '#ffffff', // * white
    },
    success: {
      main: '#1cc3a5', // * green
    },
    warning: {
      main: '#fdd05c', // * yellow
    },
    error: {
      main: '#fd5c5e', // * red
    },
    info: {
      main: '#0095f6', // * blue
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
    fontWeightBold: 600,
    h1: { fontSize: '5rem', lineHeight: '6rem', fontWeight: 'normal' },
    h2: { fontSize: '3.75rem', lineHeight: '4.5rem', fontWeight: 'normal' },
    h3: { fontSize: '3rem', lineHeight: '3.625rem', fontWeight: 'normal' },
    h4: { fontSize: '2.5rem', lineHeight: '3rem', fontWeight: 'normal' },
    h5: { fontSize: '2rem', lineHeight: '2.5rem', fontWeight: 'normal' },
    h6: { fontSize: '1.5rem', lineHeight: '2rem', fontWeight: 'normal' },
    subtitle1: { fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: 'normal' },
    subtitle2: { fontSize: '1.2rem', fontWeight: 'lighter' },
    body1: { fontSize: '1rem', lineHeight: '1.25rem', fontWeight: 'normal' },
    body2: { fontSize: '0.875rem', lineHeight: '1.125rem', fontWeight: 'normal' },
    caption: { fontSize: '0.75rem', lineHeight: '1rem', fontWeight: 'normal' },
    button: { fontSize: '1rem', lineHeight: '1.625rem', fontWeight: 'normal' },
  },
  shadows: [
    'none',
    '0px 4px 8px rgba(26, 30, 63, 0.08)', // Normal shadow
    '0px 4px 12px rgba(26, 30, 63, 0.16)', // Hover state shadow
    '8px 8px 8px 0 rgba(0,0,0,0.2), -8px -8px 8px 0 rgba(255,255,255,0.04)', //outset row shadows,
    'inset 8px 8px 8px 0 rgba(0,0,0,0.2), inset -8px -8px 8px 0 rgba(255,255,255,0.04)', //inset row shadows,
    '0px 3px 5px -1px rgba(0,0,0,0.1),0px 5px 8px 0px rgba(0,0,0,0.04),0px 1px 14px 0px rgba(0,0,0,0.02)',
    '0px 3px 5px -1px rgba(0,0,0,0.1),0px 6px 10px 0px rgba(0,0,0,0.04),0px 1px 18px 0px rgba(0,0,0,0.02)',
    '0px 4px 5px -2px rgba(0,0,0,0.1),0px 7px 10px 1px rgba(0,0,0,0.04),0px 2px 16px 1px rgba(0,0,0,0.02)',
    '0px 5px 5px -3px rgba(0,0,0,0.1),0px 8px 10px 1px rgba(0,0,0,0.04),0px 3px 14px 2px rgba(0,0,0,0.02)',
    '0px 5px 6px -3px rgba(0,0,0,0.1),0px 9px 12px 1px rgba(0,0,0,0.04),0px 3px 16px 2px rgba(0,0,0,0.02)',
    '0px 6px 6px -3px rgba(0,0,0,0.1),0px 10px 14px 1px rgba(0,0,0,0.04),0px 4px 18px 3px rgba(0,0,0,0.02)',
    '0px 6px 7px -4px rgba(0,0,0,0.1),0px 11px 15px 1px rgba(0,0,0,0.04),0px 4px 20px 3px rgba(0,0,0,0.02)',
    '0px 7px 8px -4px rgba(0,0,0,0.1),0px 12px 17px 2px rgba(0,0,0,0.04),0px 5px 22px 4px rgba(0,0,0,0.02)',
    '0px 7px 8px -4px rgba(0,0,0,0.1),0px 13px 19px 2px rgba(0,0,0,0.04),0px 5px 24px 4px rgba(0,0,0,0.02)',
    '0px 7px 9px -4px rgba(0,0,0,0.1),0px 14px 21px 2px rgba(0,0,0,0.04),0px 5px 26px 4px rgba(0,0,0,0.02)',
    '0px 8px 9px -5px rgba(0,0,0,0.1),0px 15px 22px 2px rgba(0,0,0,0.04),0px 6px 28px 5px rgba(0,0,0,0.02)',
    '0px 8px 10px -5px rgba(0,0,0,0.1),0px 16px 24px 2px rgba(0,0,0,0.04),0px 6px 30px 5px rgba(0,0,0,0.02)',
    '0px 8px 11px -5px rgba(0,0,0,0.1),0px 17px 26px 2px rgba(0,0,0,0.04),0px 6px 32px 5px rgba(0,0,0,0.02)',
    '0px 9px 11px -5px rgba(0,0,0,0.1),0px 18px 28px 2px rgba(0,0,0,0.04),0px 7px 34px 6px rgba(0,0,0,0.02)',
    '0px 9px 12px -6px rgba(0,0,0,0.1),0px 19px 29px 2px rgba(0,0,0,0.04),0px 7px 36px 6px rgba(0,0,0,0.02)',
    '0px 10px 13px -6px rgba(0,0,0,0.1),0px 20px 31px 3px rgba(0,0,0,0.04),0px 8px 38px 7px rgba(0,0,0,0.02)',
    '0px 10px 13px -6px rgba(0,0,0,0.1),0px 21px 33px 3px rgba(0,0,0,0.04),0px 8px 40px 7px rgba(0,0,0,0.02)',
    '0px 10px 14px -6px rgba(0,0,0,0.1),0px 22px 35px 3px rgba(0,0,0,0.04),0px 8px 42px 7px rgba(0,0,0,0.02)',
    '0px 11px 14px -7px rgba(0,0,0,0.1),0px 23px 36px 3px rgba(0,0,0,0.04),0px 9px 44px 8px rgba(0,0,0,0.02)',
    '0px 11px 15px -7px rgba(0,0,0,0.1),0px 24px 38px 3px rgba(0,0,0,0.04),0px 9px 46px 8px rgba(0,0,0,0.02)',
  ],
  shape: {
    borderRadius: 4,
  },
})

theme.components = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontSize: 14,
        fontWeight: 600,
        height: 30,
        borderRadius: 4,
        boxShadow: 'none',
        padding: '5px 25px',
        '&.Mui-disabled': {
          border: 'solid 1px transparent !important',
        },
        '&:hover, &:focus, &:active': {
          boxShadow: 'none',
        },
      },
      contained: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
        },
        '&:active': {
          backgroundColor: hexToRgba(theme.palette.primary.main, 0.7),
        },
      },
    },
  },
}

export { theme }
