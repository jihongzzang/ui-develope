import AppConfig from '@/config';
import * as React from 'react';
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import { renderStatic } from '@/shared/renderer';

type MyDocumentProps = DocumentInitialProps & {
  ids: string[];
  css: string;
};

export default class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const page = await ctx.renderPage();
    const { css, ids } = await renderStatic(page.html);

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <React.Fragment>
          {initialProps.styles}
          <style data-emotion={`css ${ids.join(' ')}`} dangerouslySetInnerHTML={{ __html: css }} />
        </React.Fragment>
      ),
    };
  }

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
