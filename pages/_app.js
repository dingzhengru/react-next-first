import '../styles/globals.scss';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';

//* 入口檔案，且會根據 page/目錄 來建立路徑 (類似 nuxt.js)

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  console.log('[Router]', router);

  return (
    <div>
      <h1>Next</h1>

      <header>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>blog</a>
            </Link>
          </li>
        </ul>
      </header>

      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default MyApp;
