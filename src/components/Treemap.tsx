import React, { useEffect, useRef } from 'react';
import { TreemapProps } from '../types/TreemapTypes';
import { computeTreemapLayout } from '../utils/treemapLayout';
import { setupHighDPICanvas } from '../utils/canvas';
import { renderTreemapNode } from '../utils/treemapRenderer';

export const Treemap: React.FC<TreemapProps> = ({
  data,
  width,
  height,
  padding = 2,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = setupHighDPICanvas(canvas, width, height);
    if (!ctx) return;

    const rootNode = { ...data };
    computeTreemapLayout(rootNode, 0, 0, width, height);
    renderTreemapNode(rootNode, 0, { ctx, padding });
  }, [data, width, height, padding]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        display: 'block',
      }}
    />
  );
};