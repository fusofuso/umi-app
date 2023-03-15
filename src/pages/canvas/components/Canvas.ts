import Event from './Event';
import Rect from './Rect';

const eventList = [
  'click',
  'mousemove',
  // ...
];

class Canvas extends Event {
  ctx: CanvasRenderingContext2D;
  canvas;
  children: any[];
  defaultOpts = {};
  constructor(c: HTMLCanvasElement) {
    super();
    this.canvas = c;
    this.ctx = c.getContext('2d') as CanvasRenderingContext2D;

    this.children = [];
  }

  addChild(shape: any) {
    this.children.push(shape);
  }

  draw() {
    this.children.forEach((shape) => shape.draw());
  }

  rect(config: any) {
    const rect = new Rect(config, this);
    this.addChild(rect);
    return rect;
  }
}

export default Canvas;
