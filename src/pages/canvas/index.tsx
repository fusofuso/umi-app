import { useEffect, useState } from 'react';
import styles from './index.less';
import brownPng from '@/assets/common/bg-brown.png';
import Canvas from '../../components/CustomCanvas';
import { EventEnum } from '@/components/CustomCanvas/enum';
import { Button } from 'antd';

export default function CanvasDemo() {
  let canvas: Canvas;
  const [type, setType] = useState<number>();

  // useEffect(() => {
  //   canvas = new Canvas(document.querySelector('#canvas') as HTMLCanvasElement);
  //   draw();
  // }, []);
  useEffect(() => {
    canvas = new Canvas(document.querySelector('#canvas') as HTMLCanvasElement);
    draw();
  }, [type]);

  const draw = () => {
    switch (type) {
      case 1:
        // //绘制图形
        drawCartoon();
        break;
      case 2:
        // //绘制颜色条
        drawColorBar();
        break;
      case 3:
        // //矩形拖拽
        drawRectDrag();
        break;
      case 4:
        //绘制圆形
        drawCircle();
        break;
      case 5:
        // //绘制图片
        drawImage();
        break;

      default:
        break;
    }

   
  };
  const drawCircle = () => {
    canvas.circle({
      x: 200,
      y: 200,
      radius: 50,
      startAngle: 0,
      endAngle: 2 * Math.PI,
      // fillStyle:'gray',
      strokeStyle: 'yellow',
      draggable: true,
    });
    canvas.draw();
  };

  const drawRectDrag = () => {
    canvas.rect({
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      fillStyle: '#fff',
      draggable: true,
    });
    canvas.rect({
      x: 200,
      y: 200,
      width: 100,
      height: 100,
      fillStyle: '#fff',
      draggable: true,
    });
    canvas.draw();
  };
  const drawColorBar = () => {
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
          draggable: true,
        });
        rect.on(EventEnum.CLICK, (event: PointerEvent) => {
          drawCartoon(rect.config.fillStyle);
        });
      }
    }
    canvas.draw();
  };
  const drawCartoon = (fillStyle: string = 'red') => {
    const ctx = canvas.ctx;
    // 绘制哆啦A梦的头
    ctx.beginPath();
    ctx.arc(200, 200, 100, 0, 2 * Math.PI);
    ctx.fillStyle = fillStyle;
    ctx.fill();

    // 绘制哆啦A梦的身体
    ctx.beginPath();
    ctx.rect(150, 300, 100, 100);
    ctx.fillStyle = fillStyle;
    ctx.fill();

    // 绘制哆啦A梦的手
    ctx.beginPath();
    ctx.moveTo(100, 300);
    ctx.lineTo(150, 300);
    ctx.lineTo(150, 350);
    ctx.lineTo(100, 350);
    ctx.closePath();
    ctx.fillStyle = fillStyle;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineTo(250, 300);
    ctx.lineTo(250, 350);
    ctx.lineTo(300, 350);
    ctx.closePath();
    ctx.fillStyle = fillStyle;
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

  const drawImage = () => {
    const ctx = canvas.ctx;
    const img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
    };
    img.src = brownPng;
  };

  return (
    <div>
      <div>
        <Button.Group>
          <Button
            onClick={() => {
              setType(1);
            }}
          >
            绘制图形
          </Button>
          <Button
            onClick={() => {
              setType(2);
            }}
          >
            绘制color bar
          </Button>
          <Button
            onClick={() => {
              setType(3);
            }}
          >
            绘制矩形
          </Button>
          <Button
            onClick={() => {
              setType(4);
            }}
          >
            绘制圆形
          </Button>
          <Button
            onClick={() => {
              setType(5);
            }}
          >
            绘制图片
          </Button>
        </Button.Group>
      </div>
      <canvas className={styles.canvas} id="canvas" width="600" height="600">
        <span>浏览器不支持canvas</span>
      </canvas>
    </div>
  );
}
