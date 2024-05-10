import React from 'react';
import { ForceGraph2D } from 'react-force-graph';

const RelationGraphAuthors = ({ authorNodes, documentNodes, edges, width, height }) => {
    return (
        <div className="grow overflow-hidden">
            <ForceGraph2D
                graphData={{   
                    nodes: [...authorNodes, ...documentNodes],
                    links: edges
                }}
                nodeCanvasObject={(node, ctx, globalScale) => {
                    const type = node.type || '';
                    const fontSize = 12 / globalScale;
                    ctx.font = `${fontSize}px Sans-Serif`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillStyle = 'black';
                    ctx.fillText(type, node.x, node.y + 10);
    
                    const shapeSize = 5 / globalScale;
                    const adjustedSize = Math.max(1, shapeSize);
                    const scaledSize = Math.min(10, adjustedSize);
    
    
                    if (node.type === 'author') {
                        ctx.fillStyle = 'blue';
                        ctx.beginPath();
                        ctx.arc(node.x, node.y, scaledSize, 0, 2 * Math.PI);
                        ctx.fill();
                    } else if (node.type === 'document') {
                        ctx.fillStyle = 'red';
                        ctx.fillRect(node.x - scaledSize, node.y - scaledSize, scaledSize * 2, scaledSize * 2);
                    }
                }}
                backgroundColor='white'
                height={height}
                width={width}
            />
        </div>
    );
};

export default RelationGraphAuthors;