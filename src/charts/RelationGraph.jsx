import React from 'react';
import ReactDOM from 'react-dom';
// import Graph from 'react-graph-vis';

const RelationGraph = ({ data, width, height }) => {
    const graph = {
        nodes: data.nodes,
        edges: data.edges,
    }

    const options = {
        layout: {
            hierarchical: true
        },
        edges: {
            color: "#000000"
        },
        height: "500px"
    };
    
    const events = {
        select: function(event) {
            var { nodes, edges } = event;
        }
    };

    return (
        <div>

        </div>
        // <Graph
        //     graph={graph}
        //     options={options}
        //     events={events}
        // />
    );
}

export default RelationGraph;