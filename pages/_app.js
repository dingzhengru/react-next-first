import '../styles/globals.scss';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useLayoutEffect, useContext } from 'react';

//* settings
import { ROUTE_AUTH_LIST } from '../settings';

//* cookie
import { cookieGetIsLoggedIn, cookieSetIsLoggedIn } from '../utils/cookie';

//* Context
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

//* 入口檔案，且會根據 page/目錄 來建立路徑 (類似 nuxt.js)

function MyApp({ Component, pageProps }) {
  //* Context
  const defaultTheme = useContext(ThemeContext);
  const [theme, setTheme] = useState(defaultTheme);

  const defaultUser = useContext(UserContext);
  defaultUser.isLoggedIn = cookieGetIsLoggedIn();
  const [user, setUser] = useState(defaultUser);

  const changeUser = item => {
    setUser(item);
    cookieSetIsLoggedIn(item.isLoggedIn);
  };

  const router = useRouter();

  useLayoutEffect(() => {
    console.log('[Router]', router);

    if (ROUTE_AUTH_LIST.includes(router.pathname) && !user.isLoggedIn) {
      console.log('[Router][Redirect]');
      router.push('/');
    }
  }, [router]);

  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={theme}>
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
              <li>
                <Link href="/user">
                  <a>user(需登入)</a>
                </Link>
              </li>
            </ul>
          </header>

          <main>
            <Component {...pageProps} changeUser={changeUser} changeTheme={setTheme} />
          </main>
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default MyApp;
