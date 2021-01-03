import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  // direction: 'rtl',
  palette: {
    primary: {
      main: '#000',
    }, 
    secondary: {
      main: '#000',
    },
    text: {
      primary: '#000',
      secondary: '#000',
    },
  },
  shape: {
    borderRadius: '1vh'
  },
  typography: {
    htmlFontSize: 16,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontWeight: 400,
      fontSize: "3.75rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontWeight: 300,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "0em"
    },
    h4: {
      fontWeight: 400,
      fontSize: "2.125rem",
      lineHeight: 1.235,
      letterSpacing: "0.00735em"
    }
  }

  // palette: {
  //   primary: {
  //     main: '#fff',
  //   },
  //   secondary: {
  //     main: '#19857b',
  //   },
  //   error: {
  //     main: red.A400,
  //   },
  //   background: {
  //     default: '#fff',
  //   },
  // },
});

export default theme;