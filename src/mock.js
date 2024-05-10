const mockData = [  
    {
        clusterId: 1,
        totalClusterValue: 20,
        nodes: [
            {
            id: 1,
            authors: ['author1', 'author2'],
            label: "node 1",
            title: 'this is node 1'
            },
            {
            id: 2,
            authors: ['author2'],
            label: 'node 2',
            title: 'this is node 2'
            },
            {
            id: 3,
            authors: ['author2'],
            label: 'node 3',
            title: 'this is node 3'
            },
            {
            id: 4,
            authors: ['author3'],
            label: 'node 4',
            title: 'this is node 4'
            }
        ],
        edges: [
            { source: 1, target: 2},
            { source: 2, target: 3},
            { source: 3, target: 1},
            { source: 2, target: 4},
            { source: 1, target: 4},
        ],
        clusterSummary: 'lorem ipsum...',
        similar: {
            authors: ['author1', 'author2', 'author3'],
            themes: ['planes', 'trains']
        }
    },
    {
        clusterId: 2,
        totalClusterValue: 40,
        nodes: [
            {
            id: 5,
            authors: ['author4', 'author5', 'author3'],
            label: "node 5",
            title: 'this is node 5'
            },
            {
            id: 6,
            authors: ['author4'],
            label: 'node 6',
            title: 'this is node 6'
            },
            {
            id: 7,
            authors: ['author3'],
            label: 'node 7',
            title: 'this is node 7'
            },
            {
            id: 8,
            authors: ['author5'],
            label: 'node 8',
            title: 'this is node 8'
            }
        ],
        edges: [
            {source: 5, target: 6},
            {source: 6, target: 7},
            {source: 7, target: 8},
        ],
        clusterSummary: 'second lorem ipsum...',
        similar: {
            authors: ['author3', 'author4', 'author5'],
            themes: ['vans', 'cars']
        }
    },
    {
        clusterId: 3,
        totalClusterValue: 60,
        nodes: [
            {
            id: 9,
            authors: ['author5'],
            label: "node 9",
            title: 'this is node 9'
            },
            {
            id: 10,
            authors: ['author5'],
            label: 'node 10',
            title: 'this is node 10'
            },
            {
            id: 11,
            authors: ['author6'],
            label: 'node 11',
            title: 'this is node 11'
            },
            {
            id: 12,
            authors: ['author7'],
            label: 'node 12',
            title: 'this is node 12'
            }
        ],
        edges: [
            {source: 9, target: 10},
            {source: 10, target: 11},
            {source: 11, target: 12},
            {source: 9, target: 11},
        ],
        clusterSummary: 'third lorem ipsum...',
        similar: {
            authors: ['author5', 'author6', 'author7'],
            themes: ['boats', 'ships']
        }
    }
]

export default mockData;