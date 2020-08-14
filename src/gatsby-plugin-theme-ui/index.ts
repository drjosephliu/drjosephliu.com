import nightOwl from '@theme-ui/prism/presets/night-owl.json';
import colors from "./colors";
import headings from "./headings";

const systemFonts =
  '-apple-system, BlinkMacSystemFont, San Francisco, Helvetica Neue, Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial, sans-serif';
const transition = '0.2s ease-out';

export default {
  useColorSchemeMediaQuery: true,
  colors,
  initialColorMode: `dark`,
  fonts: {
    body: systemFonts,
    heading: "Avenir Next",
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
    '320px', '376px', '540px', '735px', '1070px', '1280px', '1640px', '1880px'
  ],
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
