export declare module '@mui/material/styles/createPalette' {
  // * Override `TypeBackground` for background palette
  interface TypeBackground {
    default: string
    paper: string
    light: string
    lighten: string
  }

  // * Override `primary` and `secondary` for background palette
  interface PaletteColor {
    lighten: string
    light: string
    main: string
    dark: string
    darken: string
    contrastText: string
  }

  // *  allow configuration using `createTheme`
  interface SimplePaletteColorOptions {
    lighten?: string
    light?: string
    main: string
    dark?: string
    darken?: string
    contrastText?: string
  }

  // * Override `palette.text`
  interface TypeText {
    primary: string
    secondary: string
    tertiary: string
    disabled: string
    lighten: string
    light: string
    main: string
    dark: string
    darken: string
  }
}
