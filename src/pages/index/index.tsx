import styles from './index.less';
import { history } from 'umi';
export default function IndexPage() {
  const toPage = (route: string) => {
    history.push(route);
  };

  return (
    <div>
      <h1
        className={styles.title}
        onClick={() => {
          toPage('/canvas');
        }}
      >
        Canvas
      </h1>
      <h1
        className={styles.title}
        onClick={() => {
          toPage('/canvasLayer');
        }}
      >
        CanvasLayer
      </h1>
    </div>
  );
}
