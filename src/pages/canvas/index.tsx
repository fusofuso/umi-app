import { useEffect } from 'react';
import styles from './index.less';

export default function IndexPage() {
  useEffect(() => {
    draw();
  }, []);

  const draw = () => {
    let canvas = document.getElementById('tutorial') as HTMLCanvasElement;

    if (canvas.getContext) {
      let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      ctx.fillStyle = 'rgb(200,0,0)';
      ctx.fillRect(10, 10, 50, 50);
    } else {
      // canvas-unsupported code here
    }
  };

  return (
    <div>
      <canvas className={styles.canvas} id="tutorial" width="150" height="150">
        <span>浏览器不支持canvas</span>
      </canvas>
    </div>
  );
}
