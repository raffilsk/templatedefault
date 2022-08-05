import type { AppProps } from 'next/app';
import { globalStyles } from '../styles/theme/stitches.config';

import AOS from 'aos';

import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 1000,
      once: true,
    });
  }, []);

  globalStyles();
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>New Tamplate</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
