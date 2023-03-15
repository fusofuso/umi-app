import Event from './Event';
import Rect from './Rect';
import { RectConfig } from './type';
import { EventList } from './const';

class Canvas extends Event {
  ctx: CanvasRenderingContext2D;
  canvas;
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
  handleEvent = (event: MouseEvent) => {
    this.children
      .filter((shape) => shape.isEventInRegion(event.x, event.y))
      .forEach((shape) => shape.emit(event.type, event));
  };

  addChild(shape: Rect) {
    this.children.push(shape);
  }

  draw() {
    this.children.forEach((shape) => shape.draw());
  }

  rect(config: RectConfig) {
    const rect = new Rect(config, this);
    this.addChild(rect);
    return rect;
  }
}

export default Canvas;
