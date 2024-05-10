import React from 'react';
import { ForceGraph2D } from 'react-force-graph';

const RelationGraph = ({ data, width, height }) => {
    const graph = {
        nodes: data.nodes,
        links: data.edges,
    }
    console.log(graph.links)
    return (
        <div className="grow overflow-hidden">
            <ForceGraph2D 
                graphData={graph} 
                width={width} 
                height={height} 
                backgroundColor='white'
                nodeCanvasObject={(node, ctx, globalScale) => {
                    const label = node.label || '';
                    const fontSize = 12 / globalScale;
                    ctx.font = `${fontSize}px Sans-Serif`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillStyle = 'black';
                    ctx.fillText(label, node.x, node.y + 10);
                }}
                nodeCanvasObjectMode={() => 'before'}
            /> 
        </div>
    );
}

export default RelationGraph;