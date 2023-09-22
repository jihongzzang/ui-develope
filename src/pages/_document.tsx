import AppConfig from '@/config';
import * as React from 'react';
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
// import { extractCritical } from '@emotion/server';

type MyDocumentProps = DocumentInitialProps & {
  ids: string[];
  css: string;
};

export default class MyDocument extends Document<MyDocumentProps> {
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
