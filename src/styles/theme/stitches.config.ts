import { createStitches } from '@stitches/react';

export const { styled, css, theme, globalCss, getCssText } = createStitches({
  prefix: 'stitches-style',

  theme: {
    colors: {
      neutalLightPure: '#FFFFFF',
      neutalLightMedium: '#E4E3E2',

      neutralDarkPure: '#000000',
      neutralDarkMedium: '#1D1E1F',
    },
  },

  media: {
    lgSm: '(max-width: 800px)',
    lgUp: '(min-width: 801px)',
  },
});

export const globalStyles = globalCss({
  '*': {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$neutalLightPure',
    color: '$neutralDarkMedium',
  },

  // Configuaração do Modal

  '.ReactModalPortal': {
    '.ReactModal__Overlay': {
      zIndex: 9999,
      backgroundColor: 'rgba(000, 000, 000, 0.80) !important',
    },
  },

  '.ReactModal__Body--open': {
    overflow: 'hidden',
  },

  // Modelo de Importação de Fonts
  /*
  '@import':
    "url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap')",
  '@font-face': [
    {
      fontFamily: 'Heineken Serif',
      fontWeight: 400,
      src: 'url(/fonts/heineken-serif/HeinekenSerif-Regular.woff2)',
      fontDisplay: 'swap',
    },
  ],
  */
});
