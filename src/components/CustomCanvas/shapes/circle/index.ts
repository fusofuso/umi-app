import Shape from '../../base/Shape';
import Canvas from '../..';
import { CircleConfig } from './type';
import { ShapeEnum } from '../../enum';

class Circle extends Shape {
  canvas: Canvas;
  config: CircleConfig;
  isDragging: boolean = false;

  constructor(opts: CircleConfig, canvas: Canvas) {
    super(opts, canvas, ShapeEnum.CIRCLE);
    this.canvas = canvas;
    this.config = opts;
  }

  /**
   * 绘制
   */
  draw() {
    const ctx = this.canvas.ctx;
    const {
      x,
      y,
      radius,
      startAngle,
      endAngle,
      fillStyle,
      strokeStyle,
    } = this.config;
    ctx.fillStyle = fillStyle || 'white';
    ctx.strokeStyle = strokeStyle || 'black';
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.stroke();
    ctx.fill();
  }

  /**
   * 判断点击是否在原型内部
   * @param clientX  点击x坐标
   * @param clientY 点击y坐标
   * @returns boolean
   */
  isEventInRegion(clientX: number, clientY: number): boolean {
    const { x, y, radius } = this.config;
    const distance = Math.sqrt((clientX - x) ** 2 + (clientY - y) ** 2);
    return distance <= radius;
  }
}

export default Circle;
