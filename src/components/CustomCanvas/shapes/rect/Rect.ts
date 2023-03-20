import Event from '../../base/Event';
import Canvas from '../..';
import { RectConfig } from './type';
import { EventEnum } from '../../enum';

class Rect extends Event {
  canvas: Canvas;
  config: RectConfig;
  isDragging: boolean = false;

  constructor(opts: RectConfig, canvas: Canvas) {
    super();
    this.canvas = canvas;
    this.config = opts;
    if (opts.draggable) {
      this.onDrag();
    }
  }

  /**
   * 绘制
   */
  draw() {
    const ctx = this.canvas.ctx;
    const { x, y, width, height, fillStyle, strokeStyle } = this.config;
    ctx.fillStyle = fillStyle || 'white';
    ctx.strokeStyle = strokeStyle || 'black';
    ctx.fillRect(x, y, width, height);
    ctx.strokeRect(x, y, width, height);
  }

  /**
   * 支持拖拽
   * todo3 mousedown只需要监听元素的，mousemove何mouseup则需要监听整个画布，否则会丢失
   *
   * 问题: 两个矩形部分重叠时，在重叠区域进行移动会产生完全重叠
   */
  onDrag() {
    this.on(EventEnum.MOUSEDOWN, (event: PointerEvent) => {
      this.isDragging = true;
    });
    this.canvas.on(EventEnum.MOUSEMOVE, (event: PointerEvent) => {
      if (this.isDragging) {
        this.config.x = event.x - this.config.width / 2;
        this.config.y = event.y - this.config.height / 2;
        this.canvas.draw();
      }
    });
    this.canvas.on(EventEnum.MOUSEUP, (event: PointerEvent) => {
      this.isDragging = false;
    });
  }

  /**
   * 判断点击是否在矩形内部
   * @param clientX  点击x坐标
   * @param clientY 点击y坐标
   * @returns boolean
   */
  isEventInRegion(clientX: number, clientY: number): boolean {
    const point = this.getEventPosition(clientX, clientY); // 计算基于canvas坐标系的坐标值
    const { x, y, width, height } = this.config;
    if (
      x < point.x &&
      point.x < x + width &&
      y < point.y &&
      point.y < y + height
    )
      return true;

    return false;
  }

  /**
   * 获取点击事件的点基于canvas坐标系的坐标值
   * @param clientX
   * @param clientY
   * @returns
   */
  getEventPosition(clientX: number, clientY: number): { x: number; y: number } {
    const bbox = this.canvas.canvasElement.getBoundingClientRect();
    return {
      x: clientX - bbox.left,
      y: clientY - bbox.top,
    };
  }

  /**
   * 判断两个矩形是否有碰撞
   * @param rect1
   * @param rect2
   * @returns
   */
  checkCollision(rect1: RectConfig, rect2: RectConfig): boolean {
    let rect1Left = rect1.x;
    let rect1Right = rect1.x + rect1.width;
    let rect1Top = rect1.y;
    let rect1Bottom = rect1.y + rect1.height;

    let rect2Left = rect2.x;
    let rect2Right = rect2.x + rect2.width;
    let rect2Top = rect2.y;
    let rect2Bottom = rect2.y + rect2.height;

    if (
      rect1Left < rect2Right &&
      rect1Right > rect2Left &&
      rect1Top < rect2Bottom &&
      rect1Bottom > rect2Top
    )
      return true; // 碰撞发生

    // 没有碰撞发生
    return false;
  }
}

export default Rect;
