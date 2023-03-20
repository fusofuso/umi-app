import { ShapeConfig } from '../../base/type';
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
