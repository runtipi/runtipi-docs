import React from 'react';
import '../styles.css';
import 'nextra-theme-docs/style.css';
import { GeistSans } from 'geist/font/sans';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <main className={GeistSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
