import { useEffect } from 'react';
import styles from './index.less';
import brownPng from '@/assets/common/bg-brown.png';
import Canvas from '../../components/CustomCanvas';
import { EventEnum } from '@/components/CustomCanvas/enum';

export default function CanvasDemo() {
  let canvas: HTMLCanvasElement;

  useEffect(() => {
    canvas = document.querySelector('#canvas') as HTMLCanvasElement;
    draw();
  }, []);

  const draw = () => {
    // 初始化 WebGL 上下文
    const gl = canvas.getContext('webgl');
    // 确认 WebGL 支持性
    if (!gl) {
      alert('无法初始化 WebGL，你的浏览器、操作系统或硬件等可能不支持 WebGL。');
      return;
    }
    // 使用完全不透明的黑色清除所有图像
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // 用上面指定的颜色清除缓冲区
    gl.clear(gl.COLOR_BUFFER_BIT);
  };

  return (
    <div>
      <canvas className={styles.canvas} id="canvas" width="600" height="600">
        <span>浏览器不支持canvas</span>
      </canvas>
    </div>
  );
}
