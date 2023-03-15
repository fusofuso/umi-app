import Event from './Event';
import Canvas from './Canvas';
import { RectConfig } from './type';

class Rect extends Event {
  canvas;
  config: RectConfig;
  constructor(opts: RectConfig, canvas: Canvas) {
    super();
    this.canvas = canvas;
    this.config = opts;
  }

  draw() {
    const ctx = this.canvas.ctx;
    const { x, y, width, height, fillStyle } = this.config;
    ctx.fillStyle = fillStyle;
    ctx.fillRect(x, y, width, height);
  }

  isEventInRegion(clientX: number, clientY: number) {
    const point = this.getEventPosition(clientX, clientY); // 计算基于canvas坐标系的坐标值
    const { x, y, width, height } = this.config;
    if (
      x < point.x &&
      point.x < x + width &&
      y < point.y &&
      point.y < y + height
    ) {
      return true;
    }
    return false;
  }

  getEventPosition(clientX: number, clientY: number) {
    const bbox = this.canvas.canvas.getBoundingClientRect();
    return {
      x: clientX - bbox.left,
      y: clientY - bbox.top,
    };
  }
}

export default Rect;