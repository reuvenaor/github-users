import { ServerStyleSheet } from 'styled-components'
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets as ServerStyleSheetsMui  } from '@material-ui/core/styles';

export default class MyDocument extends Document {

  render() {
    return (
      <Html lang="en" >
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="description"
            content="Reuven Naor Web and Mobile Developer"></meta>
          <meta name="keywords" content="Reuven Naor,Web and Mobile Developer, JavaScript Developer, React Native Developer" />
        </Head>
        <body dir="rtl">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheetsMui = new ServerStyleSheetsMui();
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(sheetsMui.collect(<App {...props} />)),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        <React.Fragment key="styles">
          {initialProps.styles}
          {sheetsMui.getStyleElement()}
          {sheet.getStyleElement()}
        </React.Fragment>,
      ],
    }
  }
  finally {
    sheet.seal()
  }
};
