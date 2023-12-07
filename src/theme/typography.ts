import {Lato} from '@next/font/google';

// ----------------------------------------------------------------------

export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({
  xs,
  sm,
  md,
  lg,
}: {
  xs: number;
  sm: number;
  md: number;
  lg: number;
}) {
  return {
    '@media (min-width:300px)': {
      fontSize: pxToRem(xs),
    },
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

export const primaryFont = Lato({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

/* export const secondaryFont = Barlow({
  weight: ['800'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
}); */

export const secondaryFont = Lato({
  weight: ['300'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// ----------------------------------------------------------------------

// LEARN MORE
// https://nextjs.org/docs/basic-features/font-optimization#google-fonts

const typography = {
  fontFamily: primaryFont.style.fontFamily,
  fontWeightLight: 100,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontFamily: secondaryFont.style.fontFamily,
    fontWeight: 100,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ xs: 30, sm: 38, md: 46, lg: 62 }),
    textAlign: 'center',
  },
  h2: {
    fontWeight: 800,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ xs: 21, sm: 28, md: 32, lg: 38 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ xs: 18, sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ xs: 16, sm: 20, md: 24, lg: 28 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ xs: 14, sm: 19, md: 20, lg: 24 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ xs: 13, sm: 18, md: 19, lg: 21 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ xs: 13, sm: 14, md: 15, lg: 16 }),
  },
  body2: {
    lineHeight: 18 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'inherit',
  },
} as const;

export default typography;
