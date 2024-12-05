const vertices = ['A', 'B', 'C', 'D', 'E']

const edges = [
    ['A', 'B'],
    ['A', 'D'],
    ['B', 'C'],
    ['C', 'D'],
    ['C', 'E'],
    ['D','E']
]

//find adjasent nodes and tell me what is connected to
const findAdjasentNodes = function(node){
    // Loop thorugh edges array
    // My node is in connection?
    // If yes, push the other node in pair, into adjacent array
    //  If no, keep going
    const adjacentNodes = [];
    for(let edge of edges){
        // edge = ["A", "B"]
        const nodeIndex = edge.indexOf(node);
        // console.log(nodeIndex)
        if(nodeIndex >-1){
            adjacentNode = nodeIndex === 0 ? edge[1] : edge[0]
            // console.log(adjacentNode)
            adjacentNodes.push(adjacentNode)
        }
    }
    return adjacentNodes
}
// is connected
const isConnected = function(node1, node2){
    return edges.some((edge)=>{
        return edge.indexOf(node1) >-1 && edge.indexOf(node2) >-1
    })

}


// console.log(findAdjasentNodes('C'))
// console.log(isConnected('A', 'B'))
// 2--------------------------------------------------------
// Adjacency matrix


const vertexIndexes = {
    'A':0,
    'B':1,
    'C': 2,
    'D':3,
    'E':4
}

const adjacencyMatrix = [
    [0,1,0,1,0],
    [1,0,1,0,0],
    [0,1,0,1,1],
    [1,0,1,0,1],
    [0,0,1,1,0]
]
// find adjasencies 
const findAllAdjecenciesAdj = function(node){
    const adjNodes = []
// get the row in the matris
// loop through the row
// if there is one push that node 
// otehrwise skip
    for(i = 0; i< vertices.length;i++){
        nodeVertex = vertexIndexes[i]
        if(adjacencyMatrix[nodeVertex][i]===1){
            adjNodes.push(vertices[i])
        }
    }

    return adjNodes
}

// console.log(findAdjasentNodes('C'))
// isConnected
const isConnectedAdj = function(node1, node2){
    const nodeIdx1 = vertexIndexes[node1]
    const nodeIdx2 = vertexIndexes[node2]
    return !!adjacencyMatrix[nodeIdx1][nodeIdx2]
}

// console.log(isConnected('A', 'B'))
// 3------------------------------------------------------------
// Adjacency List

class Node {
    constructor(value){
        this.value = value
        this.edgeList = []
    }
    connect(node){
        this.edgeList.push(node)
        node.edgeList.push(this)
    }

    getAdjNodes(){
        // return this.edgeList.map(edge=> edge.value)
        return this.edgeList
    }

    isConnected(node){
        return this.edgeList.map(edge => edge.value).indexOf(node.value) > -1
    }
}

class Graph{
    constructor(nodes){
        this.nodes = [...nodes]
    }

    addToGraph(node){
        this.nodes.push(node)
    }
}

const nodeA = new Node('A')
const nodeB = new Node('B')
const nodeC = new Node('C')
const nodeD = new Node('D')
const nodeE = new Node('E')

const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE])
nodeA.connect(nodeB)
nodeA.connect(nodeD)
nodeB.connect(nodeC)
nodeC.connect(nodeD)
nodeC.connect(nodeE)
nodeD.connect(nodeE)

// for(let node of graph.nodes){
//     console.log(`Node ${node.value}`)
//     for(let connectedNodes of node.edgeList){
//         console.log(`Node ${node.value} is connected to ${connectedNodes.value}`)
//     }
// }

console.log(nodeA.getAdjNodes())
console.log(nodeC.getAdjNodes())

console.log(nodeA.isConnected(nodeB))


