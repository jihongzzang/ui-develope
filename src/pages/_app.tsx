import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
