function shortestPathUnweighted(graph, start, end){
    const queue = [start]
    const visited = new Set([start])
    const previous = {}
    while(queue.length > 0){
        let current = queue.shift();
        if(current === end) break;

        for(let neighbor of graph[current]){
            if(!visited.has(neighbor)){
                visited.add(neighbor);
                queue.push(neighbor)
                previous[neighbor] = current
            }
        }
    }

    const path = []
    let current = end
    while(current !== undefined){
        path.push(current);
        current = previous[current]
    }
    return path.reverse()
}




// Example usage:
const unweightedGraph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'D', 'E'],
    'D': ['B', 'C', 'E'],
    'E': ['C', 'D']
};
console.log(shortestPathUnweighted(unweightedGraph, 'A', 'E'));