/* eslint-disable react/no-danger */

import AppConfig from '@/config';
import Document, { DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document<DocumentInitialProps> {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <link
            rel="stylesheet"
            as="style"
            crossOrigin="anonymous"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
