import React, { useEffect, useState } from 'react';

type DotsType = {
  x: number;
  y: number;
  xa: number;
  ya: number;
  max: number;
};

function CanvasAnimation() {
  let context: CanvasRenderingContext2D;
  let canvas: HTMLCanvasElement;

  let height = document.body.offsetHeight;
  let width = document.body.offsetWidth;

  //收集点
  let dots: DotsType[] = [];

  useEffect(() => {
    canvas = document.getElementById('canvas') as HTMLCanvasElement;
    context = canvas.getContext('2d') as CanvasRenderingContext2D;
    draw();
    moveDots();
  }, []);

  const moveDots = () => {
    requestAnimationFrame(moveDots);
    // console.log(1);
    drawDots();
  };

  const draw = () => {
    //创建点
    createDots();
    // 绘制粒子
    drawDots();
  };

  const createDots = () => {
    // 创建粒子
    for (var i = 0; i < 500; i++) {
      dots.push({
        x: Math.random() * canvas.width, // x  , y  为  粒子坐标
        y: Math.random() * canvas.height,
        xa: Math.random() * 3 - 1, // xa , ya 为  粒子 xy 轴加速度
        ya: Math.random() * 3 - 1,
        max: 100, // 连线的最大距离 px
      });
    }
  };

  const drawDots = () => {
    // 先清空
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'rgba(0,43,54,1)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    // 循环加载粒子
    dots.forEach((dot) => {
      // 粒子位移
      dot.x += dot.xa;
      dot.y += dot.ya;

      // 遇到边界将 加速度 反向
      dot.xa *= dot.x > canvas.width || dot.x < 0 ? -1 : 1;
      dot.ya *= dot.y > canvas.height || dot.y < 0 ? -1 : 1;

      // 绘制点
      context.fillRect(dot.x - 1, dot.y - 1, 2, 2);
      context.fillStyle = 'rgba(255,218,27,1)';
      drawLine(dot, dots);
    });
  };

  const drawLine = (dot: DotsType, dots: DotsType[]) => {
    for (var i = 0; i < dots.length; i++) {
      var item = dots[i];

      // 过滤错误信息
      if (dot === item || item.x === null || item.y === null) continue;
      // 创建变量
      let xc = dot.x - item.x,
        yc = dot.y - item.y,
        dis = 0,
        ratio = 0;

      // 两个粒子之间的距离
      dis = Math.sqrt(xc * xc + yc * yc);

      // 判断 粒子 之间的距离
      if (dis < item.max) {
        // 计算距离比 -- 用于线 厚度
        ratio = (item.max - dis) / item.max;
        // 画线
        context.beginPath();
        context.lineWidth = ratio / 2;
        context.strokeStyle = 'rgba(255,218,27,1)';
        context.moveTo(dot.x, dot.y);
        context.lineTo(item.x, item.y);
        context.stroke();
      }
    }
  };

  return (
    <div>
      <canvas width={width} height={height} id="canvas"></canvas>
    </div>
  );
}

export default CanvasAnimation;
