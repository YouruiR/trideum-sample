import resolveConfig from 'tailwindcss/resolveConfig';

export const tailwindConfig = () => {
  // Tailwind config
  return resolveConfig('./src/css/tailwind.config.js')
}

export const hexToRGB = (h) => {
  let r = 0;
  let g = 0;
  let b = 0;
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }
  return `${+r},${+g},${+b}`;
};

export const getGraphData = (data, clusterIndex) => {
  const graphData = {
    nodes: [],
    edges: [],
  }
  if (data === undefined || clusterIndex === null) {
    return graphData;
  }
  for (const node of data[clusterIndex].nodes) {
    graphData.nodes.push({
      id: node.id,
      authors: node.authors,
      label: node.label,
      title: node.title,
    });
  }
  graphData.edges = data[clusterIndex].edges;
  return graphData;
}

export const getAuthorGraphData = (data, clusterIndex) => {
  let graphData = {
    authorNodes: [],
    documentNodes: [],
    edges: [],
  }

  if (data === undefined || clusterIndex === null) {
    return graphData;
  }

  const authorSet = new Set();
  const documentSet = new Set();
  data[clusterIndex].nodes.forEach(node => {
    node.authors.forEach(author => {
      authorSet.add(author);
    });
    documentSet.add(node.id);
  });

  const authorNodes = Array.from(authorSet).map(author => ({
    id: author,
    label: author,
    type: 'author'
  }));

  const documentNodes = Array.from(documentSet).map(documentId => {
    const document = data[clusterIndex].nodes.find(node => node.id === documentId);
    return {
      id: document.id,
      label: document.title,
      type: 'document'
    };
  });

  const edges = [];
  data[clusterIndex].nodes.forEach(node => {
    node.authors.forEach(author => {
      edges.push({ source: author, target: node.id });
    });
  });

  graphData = {
    authorNodes,
    documentNodes,
    edges
  }

  return graphData;
}

export const formatValue = (value) => Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumSignificantDigits: 3,
  notation: 'compact',
}).format(value);
