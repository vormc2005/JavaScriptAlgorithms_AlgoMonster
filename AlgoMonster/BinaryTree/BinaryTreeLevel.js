function levelOrderTraversal(root) {
    const res = [];
    // at least one element in the queue to kick start bfs
    const queue = [root];
    // as long as there is element in the queue
    while (queue.length > 0) {
        // number of nodes in current level, see explanation above
        const n = queue.length;
        const newLevel = [];
        // dequeue each node in the current level
        for (let i = 0; i < n; i++) {
            const node = queue.shift();
            newLevel.push(node.val);
            // enqueue non-null children
            for (const child of [node.left, node.right]) {
                if (child) queue.push(child);
            }
        }
        res.push(newLevel);
    }
    return res;
}
