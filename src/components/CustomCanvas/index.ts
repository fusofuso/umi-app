import Event from './base/Event';
import Rect from './shapes/rect';
import { RectConfig } from './shapes/rect/type';
import { EventList } from './const';
import { EventEnum } from './enum';
import { CircleConfig } from './shapes/circle/type';
import Circle from './shapes/circle';

class Canvas extends Event {
  ctx: CanvasRenderingContext2D;
  canvasElement: HTMLCanvasElement;
  children: Array<Rect | Circle>;
  constructor(element: HTMLCanvasElement) {
    super();
    this.canvasElement = element;
    this.ctx = element.getContext('2d') as CanvasRenderingContext2D;
    this.children = [];
    this.initEvent();
  }
  /**
   * 初始化整个canvas的事件监听
   */
  initEvent() {
    EventList.forEach((eventName) => {
      this.canvasElement.addEventListener(
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

  addChild(shape: Rect | Circle) {
    this.children.push(shape);
  }
  /**
   * 清除画布再次绘制
   */
  draw() {
    //todo1 需要先清除再绘制
    this.ctx.clearRect(
      0,
      0,
      this.canvasElement.offsetWidth,
      this.canvasElement.offsetHeight,
    );
    this.children.forEach((shape) => shape.draw());
  }

  rect(config: RectConfig) {
    const rect = new Rect(config, this);
    this.addChild(rect);
    return rect;
  }
  circle(config: CircleConfig) {
    const circle = new Circle(config, this);
    this.addChild(circle);
    return circle;
  }
}

export default Canvas;
