import Event from './Event';
import Rect from './Rect';
import { RectConfig } from './type';
import { EventList } from './const';
import { EventEnum } from './enum';

class Canvas extends Event {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  children: Array<Rect>;
  constructor(c: HTMLCanvasElement) {
    super();
    this.canvas = c;
    this.ctx = c.getContext('2d') as CanvasRenderingContext2D;
    this.children = [];
    this.initEvent();
  }
  initEvent() {
    EventList.forEach((eventName) => {
      this.canvas.addEventListener(
        eventName,
        this.handleEvent as EventListener,
      );
    });
  }
  handleEvent = (event: PointerEvent) => {
    //todo2 需要抛出canvas整个画布的监听，不然元素监听会丢失回调
    this.emit(event.type as EventEnum, event);
    this.children
      .filter((shape) => shape.isEventInRegion(event.x, event.y))
      .forEach((shape) => shape.emit(event.type as EventEnum, event));
  };

  addChild(shape: Rect) {
    this.children.push(shape);
  }
  /**
   * 清除画布再次绘制
   */
  draw() {
    //todo1 需要先清除再绘制
    this.ctx.clearRect(0, 0, this.canvas.offsetWidth, this.canvas.offsetHeight);
    this.children.forEach((shape) => shape.draw());
  }

  rect(config: RectConfig) {
    const rect = new Rect(config, this);
    this.addChild(rect);
    return rect;
  }
}

export default Canvas;
