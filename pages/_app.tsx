import '../styles.css';
import 'nextra-theme-docs/style.css';
import { GeistSans } from 'geist/font/sans';

export default function App({ Component, pageProps }) {
  return (
    <main className={GeistSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
