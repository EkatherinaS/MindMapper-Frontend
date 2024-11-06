import { ForceGraph2D } from 'react-force-graph';

export const SubjectGraph = () => {
  
    const data = {
      nodes: [
        { id: 'Node 1', url: 'http://localhost:3000/subject-union/1', label: 'Это узел 1' },
        { id: 'Node 2', url: 'http://localhost:3000/subject-union/2', label: 'Это узел 2' },
        { id: 'Node 3', label: 'Main'},
        { id: 'Node 4', url: 'http://localhost:3000/subject-union/3', label: '3' },
        { id: 'Node 5', url: 'http://localhost:3000/subject-union/4', label: '4 тема' },
      ],
      links: [
        { source: 'Node 3', target: 'Node 1' },
        { source: 'Node 2', target: 'Node 3' },
        { source: 'Node 3', target: 'Node 4' },
        { source: 'Node 3', target: 'Node 5' },
      ],  
    };
  
    const handleNodeClick = (node: { url: string; }) => {
      if (node.url) {
        window.location.href = node.url;
      }
    };
    
  
    return (
      <ForceGraph2D
        graphData={data}
        //height={600}
        nodeAutoColorBy="id"
        onNodeClick={handleNodeClick}
  
        linkCanvasObject={(link: { source: { x: any; y: any; }; target: { x: any; y: any; }; }, ctx: { beginPath: () => void; moveTo: (arg0: any, arg1: any) => void; lineTo: (arg0: any, arg1: any) => void; strokeStyle: string; lineWidth: number; stroke: () => void; fillStyle: string; fillText: (arg0: string, arg1: number, arg2: number) => void; }) => {
          ctx.beginPath();
          ctx.moveTo(link.source.x, link.source.y);
          ctx.lineTo(link.target.x, link.target.y);
          ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)'; // Цвет линии
          ctx.lineWidth = 2; // Толщина линии
          ctx.stroke(); 
        }}
        
        nodeCanvasObject={(node: { label: any; id: any; x: any; y: any; }, ctx: { measureText: (arg0: any) => { (): any; new(): any; width: any; }; beginPath: () => void; arc: (arg0: any, arg1: any, arg2: number, arg3: number, arg4: number, arg5: boolean) => void; fillStyle: string; fill: () => void; strokeStyle: string; stroke: () => void; font: string; textAlign: string; textBaseline: string; fillText: (arg0: any, arg1: any, arg2: any) => void; }) => {
          const maxRadius = 15;
          const fontSize = Math.min(maxRadius / 2, 5);
          const textWidth = ctx.measureText(node.label || node.id).width;
          const radius = Math.min(maxRadius, textWidth / 2 + 5);
  
          // Рисуем круг
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);
          ctx.fillStyle = 'white';
          ctx.fill();
          ctx.strokeStyle = 'black';
          ctx.stroke();
  
          // Настройка текста
          ctx.font = `${fontSize}px Sans-Serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = 'black';
          ctx.fillText(node.label || node.id, node.x, node.y);
        }}
      />
    );
  };