import { TreeNode } from '../types/TreemapTypes';

function calculateArea(node: TreeNode): number {
  if (!node.children) return node.value;
  const childrenSum = node.children.reduce((sum, child) => sum + calculateArea(child), 0);
  return childrenSum || node.value;
}

function normalizeValues(nodes: TreeNode[], totalArea: number): void {
  const totalValue = nodes.reduce((sum, node) => sum + calculateArea(node), 0);
  nodes.forEach(node => {
    const area = calculateArea(node);
    node.value = (area / totalValue) * totalArea;
  });
}

function layoutNodes(
  nodes: TreeNode[],
  x: number,
  y: number,
  width: number,
  height: number,
  isVertical: boolean
): void {
  let currentPosition = isVertical ? y : x;
  const availableSpace = isVertical ? height : width;
  const totalValue = nodes.reduce((sum, node) => sum + node.value, 0);

  nodes.forEach(node => {
    const size = (node.value / totalValue) * availableSpace;
    
    if (isVertical) {
      node.x = x;
      node.y = currentPosition;
      node.width = width;
      node.height = size;
    } else {
      node.x = currentPosition;
      node.y = y;
      node.width = size;
      node.height = height;
    }
    
    currentPosition += size;
  });
}

export function computeTreemapLayout(
  node: TreeNode,
  x: number,
  y: number,
  width: number,
  height: number
): void {
  // Set current node dimensions
  node.x = x;
  node.y = y;
  node.width = width;
  node.height = height;

  if (!node.children || node.children.length === 0) {
    return;
  }

  // Normalize children values to fill the available area
  normalizeValues(node.children, width * height);

  // Choose layout direction based on aspect ratio
  const isVertical = width < height;
  layoutNodes(node.children, x, y, width, height, isVertical);

  // Recursively layout children
  node.children.forEach(child => {
    if (child.children && child.children.length > 0) {
      computeTreemapLayout(
        child,
        child.x!,
        child.y!,
        child.width!,
        child.height!
      );
    }
  });
}