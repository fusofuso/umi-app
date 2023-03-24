# Canvas 的基本概念：介绍 Canvas 是什么，以及它如何与 HTML5 和 JavaScript 集成。

    前端标签元素，提供基于 HTML5 的绘图 API，允许开发者使用 JavaScript 在画布上绘制 2D 和 3D 图形，并使用 CSS 样式设置画布的背景颜色和边框样式

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
# 绘制基本形状：学习如何使用 Canvas 绘制基本形状，例如矩形、圆形和路径,绘制图像。
    //设置线条样式
    ctx.strokeStyle='red'
    //设置填充样式
    ctx.fillStyle='red'

    // 绘制一条线条
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(100, 100);
    ctx.stroke();

    // 绘制一个填充的矩形
    ctx.fillRect(50, 50, 100, 100);

    // 绘制一个矩形的边框
    ctx.strokeRect(50, 50, 100, 100);

    // 绘制一个填充的圆形
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
    ctx.fill();

    // 绘制一个圆形的边框
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
    ctx.stroke();

    // 绘制一条贝塞尔曲线路径
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.bezierCurveTo(50, 100, 100, 100, 100, 50);
    ctx.stroke();

    // 创建一个Image对象
    const img = new Image();

    // 设置Image对象的src属性
    img.src = 'path/to/image.png';

    // 在Image对象的onload事件中，将图像绘制到Canvas上
    img.onload = function() {
        ctx.drawImage(img, 0, 0);
    };

# 基于canvas原生api进行封装。


   抽象事件 - 抽象基础图形 - 图形实例


# 引入图层概念

 konva

              Stage
                |
         +------+------+
         |             |
       Layer         Layer
         |             |
   +-----+-----+     Shape
   |           |
 Group       Group
   |           |
   +       +---+---+
   |       |       |
Shape   Group    Shape
           |
           +
           |
         Shape


# 性能优化：了解如何优化 Canvas 应用程序的性能

减少绘制次数

web Worker  采用后台线程进行图形像素计算，效率更高

# 与其他 Web 技术集成：Canvas 可以与其他 Web 技术集成，例如 WebGL。

WebGL       基于OpenGL ES 2.0的3D图形库，3D渲染效率高，矩阵计算3d变换


