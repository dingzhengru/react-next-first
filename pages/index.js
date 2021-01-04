import styles from '../styles/Home.module.scss';
import HookTest from '../components/HookTest';

//* 首頁，路徑: '/'

export default function Home() {
  return (
    <div className={styles.container}>
      <HookTest />
    </div>
  );
}
