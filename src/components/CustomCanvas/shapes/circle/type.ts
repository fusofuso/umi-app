import { ShapeConfig } from '../../base/type';
export type CircleConfig = ShapeConfig & {
  /**
   * 半径
   */
  radius: number;
  /**
   * 圆弧的起始点，x 轴方向开始计算，单位以弧度表示
   */
  startAngle: number;
  /**
   * 圆弧的终点，单位以弧度表示
   */
  endAngle: number;
  /**
   * 填充样式
   */
  fillStyle?: string;
  /**
   * 边框样式
   */
  strokeStyle?: string;
  /**
   * 绘制方向
   */
  anticlockwise?: boolean;
};
