import {alpha} from '@mui/material/styles';

// ----------------------------------------------------------------------

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

/* type NewColor = {
  lighter: string,
  light: string,
  main: string,
  dark: string,
  darker: string,
  contrastText: string,
} */

declare module '@mui/material/styles/createPalette' {
  /* interface Palette {
      custom: NewColor;
    }
    interface PaletteOptions {
      custom: NewColor;
    } */
  interface TypeBackground {
    neutral: string;
  }

  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }

  interface PaletteColor {
    lighter: string;
    darker: string;
    // custom: NewColor;
  }
}

/* const theme = createTheme({
  palette: {
    custom: {
      lighter: '#f390c8',
      light: '#da4d9a',
      main: '#ba2b79',
      dark: '#a42c6e',
      darker: '#752a53',
      contrastText: '#fff',
    },
  },
}); */

// SETUP COLORS

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  light: '#455051',
  main: '#2b3233',
  dark: '#171c1c',
};


const PRIMARY = {
  lighter: '#acb1c5',
  light: '#72cddd',
  main: '#11afd3',
  dark: '#1496b4',
  darker: '#1f4269',
  contrastText: '#fff',
};

const SECONDARY = {
  lighter: '#f390c8',
  light: '#da4d9a',
  main: '#ba2b7a',
  dark: '#772a8a',
  darker: '#0e436d',
  contrastText: '#fff',
};



const INFO = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#fff',
};

const SUCCESS = {
  lighter: '#D8FBDE',
  light: '#86E8AB',
  main: '#36B37E',
  dark: '#1B806A',
  darker: '#0A5554',
  contrastText: '#fff',
};

const WARNING = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: GREY[800],
};

const ERROR = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  darker: '#7A0916',
  contrastText: '#fff',
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default function palette(themeMode: 'light' | 'dark') {
  const light = {
    ...COMMON,
    mode: 'light',
    text: {
      primary: GREY.main,
      secondary: GREY[600],
      disabled: GREY[500],
    },
    background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  } as const;

  const dark = {
    ...COMMON,
    mode: 'dark',
    text: {
      primary: '#fff',
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: alpha(GREY[500], 0.16),
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  } as const;

  return themeMode === 'light' ? light : dark;
}
