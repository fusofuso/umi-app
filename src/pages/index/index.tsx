import styles from './index.less';
import { history } from 'umi';
export default function IndexPage() {
  const toCanvas = () => {
    history.push('/canvas');
  };

  return (
    <div>
      <h1 className={styles.title} onClick={toCanvas}>
        Canvas
      </h1>
    </div>
  );
}
