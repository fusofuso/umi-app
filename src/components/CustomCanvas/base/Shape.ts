import Event from './Event';
import Canvas from '../';
import { RectConfig } from '../shapes/rect/type';
import { CircleConfig } from '../shapes/circle/type';
import { EventEnum, ShapeEnum } from '../enum';

class Shape extends Event {
  canvas: Canvas;
  config: RectConfig | CircleConfig;
  isDragging: boolean = false;
  shapeType: ShapeEnum;

  constructor(
    opts: RectConfig | CircleConfig,
    canvas: Canvas,
    type: ShapeEnum,
  ) {
    super();
    this.canvas = canvas;
    this.config = opts;
    this.shapeType = type;
    if (opts.draggable) {
      this.onDrag();
    }
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
        switch (this.shapeType) {
          case ShapeEnum.RECT:
            const config = this.config as RectConfig;
            this.config.x = event.x - config.width / 2;
            this.config.y = event.y - config.height / 2;
            break;
          case ShapeEnum.CIRCLE:
            this.config.x = event.x;
            this.config.y = event.y;
            break;
          default:
            break;
        }
        this.canvas.draw();
      }
    });
    this.canvas.on(EventEnum.MOUSEUP, (event: PointerEvent) => {
      this.isDragging = false;
    });
  }
}

export default Shape;
