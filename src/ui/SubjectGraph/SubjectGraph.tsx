import { ForceGraph2D } from 'react-force-graph';

interface Node {
  fy: number | undefined;
  fx: number | undefined;
  id: string;
  url?: string;
  label: string;
  x?: number;
  y?: number;
}

interface Link {
  source: string;
  target: string;
}

interface GraphData {
  nodes: Node[];
  links: Link[];
}

export const SubjectGraph = () => {
  const data: GraphData = {
    nodes: [
      {
        id: 'Node 1', url: 'http://localhost:3000/subject-union/1', label: 'Это узел 1', x: 40, y: 100,
        fy: undefined,
        fx: undefined
      },
      {
        id: 'Node 2', url: 'http://localhost:3000/subject-union/2', label: 'Это узел 2', x: 100, y: 100,
        fy: undefined,
        fx: undefined
      },
      {
        id: 'Node 3', label: 'Main', x: 0, y: 0,
        fy: undefined,
        fx: undefined
      },
      {
        id: 'Node 4', url: 'http://localhost:3000/subject-union/3', label: '3', x: -40, y: 100,
        fy: undefined,
        fx: undefined
      },
      {
        id: 'Node 5', url: 'http://localhost:3000/subject-union/4', label: '4 тема', x: -100, y: 100,
        fy: undefined,
        fx: undefined
      },
    ],
    links: [
      { source: 'Node 3', target: 'Node 1' },
      { source: 'Node 2', target: 'Node 3' },
      { source: 'Node 3', target: 'Node 4' },
      { source: 'Node 3', target: 'Node 5' },
    ],
  };

  return (
    <ForceGraph2D
      graphData={data}
      nodeAutoColorBy="id"
      linkCanvasObject={(link: { source: { x: any; y: any; }; target: { x: any; y: any; }; }, ctx: { beginPath: () => void; moveTo: (arg0: any, arg1: any) => void; lineTo: (arg0: any, arg1: any) => void; strokeStyle: string; lineWidth: number; stroke: () => void; }) => {
        ctx.beginPath();
        ctx.moveTo(link.source.x, link.source.y);
        ctx.lineTo(link.target.x, link.target.y);
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }}
      nodeCanvasObject={(node: { label: any; id: any; x: any; y: any; }, ctx: { measureText: (arg0: any) => { (): any; new(): any; width: any; }; beginPath: () => void; arc: (arg0: any, arg1: any, arg2: number, arg3: number, arg4: number, arg5: boolean) => void; fillStyle: string; fill: () => void; strokeStyle: string; stroke: () => void; font: string; textAlign: string; textBaseline: string; fillText: (arg0: any, arg1: any, arg2: any) => void; }) => {
        const maxRadius = 15;
        const fontSize = Math.min(maxRadius / 2, 5);
        const textWidth = ctx.measureText(node.label || node.id).width;
        const radius = Math.min(maxRadius, textWidth / 2 + 5);

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.stroke();

        ctx.font = `${fontSize}px Sans-Serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'black';
        ctx.fillText(node.label || node.id, node.x, node.y);
      }}
      onEngineTick={() => {
        // Отключаем физику, чтобы узлы не перемещались
        data.nodes.forEach(node => {
          node.fx = node.x; // Фиксируем позицию по X
          node.fy = node.y; // Фиксируем позицию по Y
        });
      }}
    />
  );
};

