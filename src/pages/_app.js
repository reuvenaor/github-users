import React from 'react';
import App from 'next/app';
import { END } from 'redux-saga';
import { SagaStore, wrapper } from '../store/store.js';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { create } from 'jss';
import Head from 'next/head';
import { StylesProvider, jssPreset, createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Theme from '../styles/theme';

const jss = create({ plugins: [...jssPreset().plugins], insertionPoint: Head });

const theme = {
  ...Theme,
  colors: {
    primary: '#fff',
  },
  // borderRadius: '1000px'
};

// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
// `

class WrappedApp extends App {
  static getInitialProps = async ({ Component, ctx }) => {
    // 1. Wait for all page actions to dispatch
    const pageProps = {
      ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
    };

    // 2. Stop the saga if on server
    if (ctx.req) {
      ctx.store.dispatch(END);
      await (ctx.store).sagaTask.toPromise();
    }

    // 3. Return props
    return {
      pageProps,
    };
  };

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return <>
      <StylesProvider jss={jss} >
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme} >
            <CssBaseline />
            <Component {...pageProps} />
          </MuiThemeProvider>
        </ThemeProvider>
      </StylesProvider>
    </>
  }
}

export default wrapper.withRedux(WrappedApp);

