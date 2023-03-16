import React, { useEffect } from 'react';
// import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

function CanvasLayer() {
  useEffect(() => {
    const stage = new Konva.Stage({
      container: 'canvasLayer',
      width: 500,
      height: 500,
    });
    const layer1 = new Konva.Layer();
    stage.add(layer1);
    const circle = new Konva.Circle({
      x: 200,
      y: 200,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4,
    });
    layer1.add(circle);

    circle.on('click', () => {
      console.log('click circle');
    });

    const rect = new Konva.Rect({
      x: 300,
      y: 300,
      width: 100,
      height: 80,
      stroke: 'red',
      draggable: true,
    });
    layer1.add(rect);
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
