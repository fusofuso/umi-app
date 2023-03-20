import React, { useEffect, useState } from 'react';
// import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

function CanvasLayer() {
  useEffect(() => {
    const stage = new Konva.Stage({
      container: 'canvasLayer',
      width: document.body.clientWidth,
      height: document.body.clientHeight,
    });
    const layer1 = new Konva.Layer();
    stage.add(layer1);
    const group1 = new Konva.Group({
      draggable: true,
    });
    const circle = new Konva.Circle({
      x: 200,
      y: 200,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4,
    });
    const rect = new Konva.Rect({
      x: 300,
      y: 300,
      width: 100,
      height: 80,
      stroke: 'red',
      draggable: true,
    });

    group1.add(circle);
    group1.add(rect);
    layer1.add(group1);

    //添加事件
    circle.on('click', () => {
      console.log('click circle');
    });
    rect.on('mouseover', function (e) {
      rect.fill('yellow');
    });
    rect.on('mouseleave', function (e) {
      rect.fill('white');
    });
  }, []);

  return <div id="canvasLayer"></div>;
}

export default CanvasLayer;
