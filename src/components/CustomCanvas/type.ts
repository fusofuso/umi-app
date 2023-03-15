export type ElementConfig = {
  index: number;
  /**
   * 横坐标
   */
  x: number;
  /**
   * 纵坐标
   */
  y: number;
};

export type RectConfig = ElementConfig & {
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
  fillStyle: string;
};
