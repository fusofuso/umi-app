export type ShapeConfig = {
  /**
   * 横坐标
   */
  x: number;
  /**
   * 纵坐标
   */
  y: number;
  /**
   * 支持拖拽
   */
  draggable?: boolean;
};

export type RectConfig = ShapeConfig & {
  /**
   * 宽度
   */
  width: number;
  /**
   * 高度
   */
  height: number;
  /**
   * 填充样式
   */
  fillStyle?: string;
  /**
   * 边框样式
   */
  strokeStyle?: string;
};
