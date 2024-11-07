import { GraphData, Id } from '../../types';
import { ForceGraph2D } from 'react-force-graph';

interface SubjectGraphProps {
  nodes: GraphData['nodes'];
  links: GraphData['links'];
  documentId: GraphData['documentId'];
  isReady: GraphData['isReady'];
  onNodeClick: (id: Id) => void;
}

export const SubjectGraph: React.FC<SubjectGraphProps> = ({
  nodes,
  links,
  documentId,
  isReady,
  onNodeClick,
}) => {
  const data: Omit<GraphData, 'documentName'> = {
    nodes: nodes,
    links: links,
    documentId: documentId,
    isReady: isReady
  };

  return (
    <ForceGraph2D
      graphData={data}
      centerContent={true}
      nodeAutoColorBy="id"
      linkDirectionalArrowLength={3.5}
      linkDirectionalArrowRelPos={1}
      linkDirectionalArrowColor={() => "#535a63"}
      linkCanvasObject={(link: { source: { x: any; y: any; }; target: { x: any; y: any; }; }, ctx: { beginPath: () => void; moveTo: (arg0: any, arg1: any) => void; lineTo: (arg0: any, arg1: any) => void; strokeStyle: string; lineWidth: number; stroke: () => void; }) => {
        ctx.beginPath();
        ctx.moveTo(link.source.x, link.source.y);
        ctx.lineTo(link.target.x, link.target.y);
        ctx.strokeStyle = '#535a63';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }}
      nodeCanvasObject={(node: { label: any; id: any; x: any; y: any; }, ctx: { measureText: (arg0: any) => { (): any; new(): any; width: any; }; beginPath: () => void; arc: (arg0: any, arg1: any, arg2: number, arg3: number, arg4: number, arg5: boolean) => void; fillStyle: string; fill: () => void; strokeStyle: string; stroke: () => void; font: string; textAlign: string; textBaseline: string; fillText: (arg0: any, arg1: any, arg2: any) => void; }) => {
        const maxRadius = 4;
        const fontSize = 5;
        const textWidth = ctx.measureText(node.label || node.id).width;
        const radius = Math.min(maxRadius, textWidth / 2 + 5);

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = '#3d96fd';
        ctx.fill();

        ctx.font = `${fontSize}px Sans-Serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'black';
        ctx.fillText(node.label || node.id, node.x, node.y + 2 * radius);
      }}

      onNodeClick={() => {
        onNodeClick(documentId);
      }}
    />
  );
};

