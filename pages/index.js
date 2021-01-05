import styles from '../styles/Home.module.scss';
import HookTest from '../components/HookTest';
import PropTypes from 'prop-types';
import { ThemeContext, themes } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

import { useContext } from 'react';

//* 首頁，路徑: '/'

export default function Home({ changeUser, changeTheme }) {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  const handleUserChange = () => {
    if (user.isLoggedIn) {
      changeUser({ ...user, isLoggedIn: false });
    } else {
      changeUser({ ...user, isLoggedIn: true });
    }
  };

  return (
    <div className={styles.container}>
      <HookTest />
      <h2>Context</h2>
      <pre style={theme}>user: {JSON.stringify(user, null, 2)}</pre>
      <button onClick={handleUserChange}>Login / Logout</button>
      <pre style={theme}>theme: {JSON.stringify(theme, null, 2)}</pre>
      <button onClick={() => changeTheme(theme == themes.dark ? themes.light : themes.dark)}>切換 theme</button>
    </div>
  );
}

Home.propTypes = {
  changeUser: PropTypes.func,
  changeTheme: PropTypes.func,
};
