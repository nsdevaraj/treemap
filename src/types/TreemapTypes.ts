export interface TreeNode {
  name: string;
  value: number;
  level?: 'root' | 'country' | 'company' | 'division';
  children?: TreeNode[];
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  color?: string;
}

export interface TreemapProps {
  data: TreeNode;
  width: number;
  height: number;
  padding?: number;
  className?: string;
}