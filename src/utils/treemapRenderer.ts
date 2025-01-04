import { TreeNode } from '../types/TreemapTypes';
import { TREEMAP_COLORS } from '../constants/colors';

interface RenderOptions {
  ctx: CanvasRenderingContext2D;
  padding: number;
}

function isValidNode(node: TreeNode): boolean {
  return (
    typeof node.x === 'number' &&
    typeof node.y === 'number' &&
    typeof node.width === 'number' &&
    typeof node.height === 'number'
  );
}

function drawRectangle(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  color: string
): void {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
  
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 1;
  ctx.strokeRect(x, y, width, height);
}

function drawLabel(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  width: number,
  isTitle = false
): void {
  ctx.save();
  ctx.fillStyle = '#ffffff';
  ctx.font = isTitle 
    ? 'bold 14px system-ui, -apple-system, sans-serif'
    : '12px system-ui, -apple-system, sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 4;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 1;
  
  const padding = isTitle ? 8 : 4;
  ctx.fillText(text, x + padding, y + padding, width - padding * 2);
  ctx.restore();
}

function drawNodeContent(
  ctx: CanvasRenderingContext2D,
  node: TreeNode,
  x: number,
  y: number,
  width: number,
  height: number,
  padding: number
): void {
  if (node.children) {
    // This is a parent node (country), draw title
    drawLabel(ctx, node.name, x, y, width, true);
  } else {
    // This is a leaf node (company), draw name and value
    if (width > 60 && height > 25) {
      const text = `${node.name}${node.value ? ` (${Math.round(node.value)})` : ''}`;
      drawLabel(ctx, text, x, y, width);
    }
  }
}

export function renderTreemapNode(
  node: TreeNode,
  depth: number,
  { ctx, padding }: RenderOptions
): void {
  if (!isValidNode(node)) return;

  const x = node.x + padding;
  const y = node.y + padding;
  const w = Math.max(0, node.width - padding * 2);
  const h = Math.max(0, node.height - padding * 2);

  if (w <= 0 || h <= 0) return;

  drawRectangle(ctx, x, y, w, h, TREEMAP_COLORS[depth % TREEMAP_COLORS.length]);
  drawNodeContent(ctx, node, x, y, w, h, padding);

  if (node.children) {
    node.children.forEach(child => renderTreemapNode(child, depth + 1, { ctx, padding }));
  }
}