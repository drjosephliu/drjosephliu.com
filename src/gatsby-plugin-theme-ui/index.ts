import nightOwl from '@theme-ui/prism/presets/night-owl.json';
import colors from "./colors";
import headings from "./headings";

const systemFonts =
  '-apple-system, BlinkMacSystemFont, San Francisco, Helvetica Neue, Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial, sans-serif';
const transition = '0.2s ease-out';

export default {
  useColorSchemeMediaQuery: true,
  colors,
  // colors: {
  //   text: `#1d2021`,
  //   background: `#dfeff3`,
  //   action: `#9e0d0d`,
  //   tag: `rgb(0 0 0 / 3.75%)`,
  //   divider: `rgb(0 0 0 / 12.5%)`,
  //   selection: `#c1e0ff`,
  //   modes: {
  //     dark: {
  //       text: `#dfeff3`,
  //       background: `#0e1010`,
  //       action: `#6bb1da`,
  //       tag: `rgb(255 255 255 / 3.75%)`,
  //       divider: `rgb(255 255 255 / 12.5%)`,
  //       selection: `#7d8585`,
  //     },
  //   },
  // },

  initialColorMode: `dark`,
  fonts: {
    body: systemFonts,
    heading: systemFonts,
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 24, 28, 36, 48, 64],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 600,
  },
  lineHeights: {
    body: 1.7,
    heading: 1.1275,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em'
  },
  breakpoints: [
    '320px', '376px', '540px', '735px', '1070px', '1280px', '1440px'
  ],
  // breakpoints: [
  //   ['phone_small', 320],
  //   ['phone', 376],
  //   ['phablet', 540],
  //   ['tablet', 735],
  //   ['desktop', 1070],
  //   ['desktop_medium', 1280],
  //   ['desktop_large', 1440]
  // ],
  transition,
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      ...headings
    },
    ...headings,
    p: {
      my: 4,
    },
    a: {
      color: 'secondary',
      transition: `color ${transition}`,
      ':hover,:focus': {
        color: 'text'
      }
    },
    pre: {
      ...nightOwl,
      fontFamily: `"Operator Mono", monospace`,
      fontSize: '0.9rem',
      tabSize: 4,
      hyphens: `none`,
      overflow: `auto`,
      borderRadius: 6,
      p: 3,
      my: 4
    },
    inlineCode: {
      color: `primary`,
      background: `rgba(233, 218, 172, 0.15)`,
      borderRadius: 3,
      px: `0.4rem`,
      py: `0.2rem`
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    }
  }
}
