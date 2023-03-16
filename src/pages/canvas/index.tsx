import { useEffect } from 'react';
import styles from './index.less';
import brownPng from '@/assets/common/bg-brown.png';
import Canvas from '../../components/CustomCanvas/Canvas';

export default function IndexPage() {
  useEffect(() => {
    // draw1();
    draw2();
  }, []);

  const draw2 = () => {
    const canvas = new Canvas(
      document.querySelector('#canvas') as HTMLCanvasElement,
    );
    // drawCartoon(canvas.ctx);
    const offset = 18;
    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 6; j++) {
        const rect = canvas.rect({
          x: (j + offset) * 25,
          y: (i + offset) * 25,
          width: 25,
          height: 25,
          fillStyle: `rgb(${Math.floor(255 - 42.5 * i)},${Math.floor(
            255 - 42.5 * j,
          )},0`,
        });
        rect.on('click', (event: PointerEvent) => {
          console.log(`rect${i}${j} click`, event, rect.config);
          drawCartoon(canvas.ctx, rect.config.fillStyle);
        });
      }
    }

    canvas.draw();
  };

  const drawCartoon = (ctx: CanvasRenderingContext2D, fillStyle: string) => {
    // 绘制哆啦A梦的头
    ctx.beginPath();
    ctx.arc(200, 200, 100, 0, 2 * Math.PI);
    ctx.fillStyle = '#00a0dc';
    ctx.fill();

    // 绘制哆啦A梦的身体
    ctx.beginPath();
    ctx.rect(150, 300, 100, 100);
    ctx.fillStyle = '#00a0dc';
    ctx.fill();

    // 绘制哆啦A梦的手
    ctx.beginPath();
    ctx.moveTo(100, 300);
    ctx.lineTo(150, 300);
    ctx.lineTo(150, 350);
    ctx.lineTo(100, 350);
    ctx.closePath();
    ctx.fillStyle = '#00a0dc';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineTo(250, 300);
    ctx.lineTo(250, 350);
    ctx.lineTo(300, 350);
    ctx.closePath();
    ctx.fillStyle = '#00a0dc';
    ctx.fill();

    // 绘制哆啦A梦的脚
    ctx.beginPath();
    ctx.moveTo(150, 400);
    ctx.lineTo(125, 450);
    ctx.lineTo(175, 450);
    ctx.closePath();
    ctx.fillStyle = '#e6b800';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(250, 400);
    ctx.lineTo(225, 450);
    ctx.lineTo(275, 450);
    ctx.closePath();
    ctx.fillStyle = '#e6b800';
    ctx.fill();

    // 绘制哆啦A梦的眼睛
    ctx.beginPath();
    ctx.arc(170, 170, 20, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffffff';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(230, 170, 20, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffffff';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(170, 170, 10, 0, 2 * Math.PI);
    ctx.fillStyle = '#000000';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(230, 170, 10, 0, 2 * Math.PI);
    ctx.fillStyle = '#000000';
    ctx.fill();

    // 绘制哆啦A梦的鼻子
    ctx.beginPath();
    ctx.arc(200, 190, 10, 0, 2 * Math.PI);
    ctx.fillStyle = '#ff6666';
    ctx.fill();
  };

  const drawImage = (ctx: CanvasRenderingContext2D) => {
    const img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
    };
    img.src = brownPng;
  };

  return (
    <div>
      <canvas className={styles.canvas} id="canvas" width="600" height="600">
        <span>浏览器不支持canvas</span>
      </canvas>
    </div>
  );
}
